#!/bin/bash

# Enhanced Deployment Script for Azure Container Apps with Robust Error Handling and Logging

# Strict mode for better error handling
set -euo pipefail

# Define color codes for enhanced readability
declare -r YELLOW='\033[0;33m'
declare -r RED='\033[0;31m'
declare -r GREEN='\033[0;32m'
declare -r BLUE='\033[0;34m'
declare -r NC='\033[0m' # No Color

# Logging and error handling functions
log_error() {
    echo -e "${RED}[ERROR] $*${NC}" >&2
}

log_info() {
    echo -e "${BLUE}[INFO] $*${NC}"
}

log_success() {
    echo -e "${GREEN}[SUCCESS] $*${NC}"
}

log_warning() {
    echo -e "${YELLOW}[WARNING] $*${NC}"
}

# Error handler
handle_error() {
    local line_number=$1
    local command=$2
    log_error "Error occurred at line $line_number: $command"
    exit 1
}

# Trap errors
trap 'handle_error $LINENO "$BASH_COMMAND"' ERR

# Help function
display_help() {
    cat << EOF
Usage: $(basename "$0") [OPTIONS]

Deploy Azure Container Apps with proper configuration.

OPTIONS:
  -h, --help              Show this help message
  -c, --config FILE       Path to config file (default: auto-detect)
  -e, --env ENV           Override environment (dev, test, prod)
  --skip-login            Skip Azure login check
  --dry-run               Show commands without executing them

Configuration file must define the following variables:
  ENVIRONMENT_PREFIX      Environment prefix (e.g., dev, prod)
  PROJECT_PREFIX          Project name prefix
  PROJECT_LOCATION        Azure region (e.g., eastus)
  LOG_FOLDER              Path to store logs
  PROJECT_RESOURCE_GROUP  Azure resource group name
  PROJECT_SUBSCRIPTION_ID Azure subscription ID
EOF
    exit 0
}

# Parse command line arguments
parse_arguments() {
    CONFIG_PATH=""
    OVERRIDE_ENV=""
    SKIP_LOGIN=false
    DRY_RUN=false
    
    while [[ $# -gt 0 ]]; do
        case "$1" in
            -h|--help)
                display_help
                ;;
            -c|--config)
                CONFIG_PATH="$2"
                shift 2
                ;;
            -e|--env)
                OVERRIDE_ENV="$2"
                shift 2
                ;;
            --skip-login)
                SKIP_LOGIN=true
                shift
                ;;
            --dry-run)
                DRY_RUN=true
                shift
                ;;
            *)
                log_error "Unknown option: $1"
                display_help
                ;;
        esac
    done
}

# Execute command with dry-run support
execute_cmd() {
    local cmd="$*"
    
    if [[ "$DRY_RUN" = true ]]; then
        log_info "[DRY RUN] Would execute: $cmd"
        return 0
    else
        log_info "Executing: $cmd"
        eval "$cmd"
        return $?
    fi
}

# Configuration and Initialization
initialize_configuration() {
    # Use provided config path or auto-detect
    if [[ -n "$CONFIG_PATH" ]]; then
        if [[ -f "$CONFIG_PATH" ]]; then
            # shellcheck source=/dev/null
            source "$CONFIG_PATH"
            log_info "Using config file: $CONFIG_PATH"
            return 0
        else
            log_error "Specified config file not found: $CONFIG_PATH"
            exit 1
        fi
    fi

    # Auto-detect config (traverse up the directory tree)
    local dir
    dir=$(pwd)
    while [[ "$dir" != "/" ]]; do
        if [[ -f "$dir/globalenv.config" ]]; then
            # shellcheck source=/dev/null
            source "$dir/globalenv.config"
            log_info "Found config file: $dir/globalenv.config"
            return 0
        fi
        dir=$(dirname "$dir")
    done

    log_error "globalenv.config not found"
    exit 1
}

# Apply environment override if specified
apply_environment_override() {
    if [[ -n "$OVERRIDE_ENV" ]]; then
        log_warning "Overriding environment to: $OVERRIDE_ENV"
        ENVIRONMENT_PREFIX="$OVERRIDE_ENV"
    fi
}

# Create log directory if it doesn't exist
ensure_log_directory() {
    if [[ ! -d "$LOG_FOLDER" ]]; then
        log_warning "Log directory does not exist. Creating: $LOG_FOLDER"
        mkdir -p "$LOG_FOLDER"
    fi
}

# Validate required environment variables
validate_configuration() {
    local required_vars=(
        "ENVIRONMENT_PREFIX"
        "PROJECT_PREFIX"
        "PROJECT_LOCATION"
        "LOG_FOLDER"
        "PROJECT_RESOURCE_GROUP"
        "PROJECT_SUBSCRIPTION_ID"
    )

    for var in "${required_vars[@]}"; do
        if [[ -z "${!var:-}" ]]; then
            log_error "Required environment variable $var is not set"
            return 1
        fi
    fi
    
    log_info "Configuration validated successfully"
    log_info "Environment: $ENVIRONMENT_PREFIX"
    log_info "Project: $PROJECT_PREFIX"
    log_info "Location: $PROJECT_LOCATION"
}

# Azure authentication and subscription setup
setup_azure_context() {
    if [[ "$SKIP_LOGIN" = true ]]; then
        log_info "Skipping Azure login check as requested"
        return 0
    fi

    log_info "Checking Azure CLI authentication"

    # Login if not already authenticated
    if ! az account show &>/dev/null; then
        log_warning "Not logged in to Azure CLI. Initiating login..."
        execute_cmd "az login"
    fi

    # Set the target subscription
    log_info "Setting Azure subscription to ${PROJECT_SUBSCRIPTION_ID}"
    execute_cmd "az account set --subscription \"${PROJECT_SUBSCRIPTION_ID}\""

    # Verify subscription is set correctly
    local current_subscription
    current_subscription=$(az account show --query id -o tsv)
    if [[ "$current_subscription" != "$PROJECT_SUBSCRIPTION_ID" ]]; then
        log_error "Failed to set Azure subscription. Current: $current_subscription, Expected: $PROJECT_SUBSCRIPTION_ID"
        return 1
    fi
}

# Check Docker availability and permissions
check_docker_permissions() {
    log_info "Checking Docker permissions"
    
    if ! command -v docker &>/dev/null; then
        log_error "Docker is not installed or not in PATH"
        return 1
    fi
    
    if ! docker info &>/dev/null; then
        log_error "Cannot connect to Docker daemon. Check if Docker is running and you have proper permissions."
        log_info "You may need to run: sudo usermod -aG docker $USER"
        log_info "Then log out and back in, or run: newgrp docker"
        return 1
    fi
    
    log_success "Docker is available and permissions are correctly set"
}

# Prepare Azure Container Registry
prepare_container_registry() {
    local registry_name="${ENVIRONMENT_PREFIX}${PROJECT_PREFIX}contregistry"

    log_info "Checking Azure Container Registry: $registry_name"

    # Check if registry exists, create if not
    if ! az acr show --name "$registry_name" --resource-group "$PROJECT_RESOURCE_GROUP" &>/dev/null; then
        log_warning "Container Registry does not exist. Creating..."
        execute_cmd "az acr create \
            --name \"$registry_name\" \
            --resource-group \"$PROJECT_RESOURCE_GROUP\" \
            --sku Basic \
            --admin-enabled true"
    fi

    # Login to ACR
    execute_cmd "az acr login --name \"$registry_name\""
    
    # Get ACR credentials for Docker
    log_info "Retrieving ACR credentials"
    local acr_username=$(az acr credential show --name "$registry_name" --query "username" -o tsv)
    local acr_password=$(az acr credential show --name "$registry_name" --query "passwords[0].value" -o tsv)
    
    # Optional: Configure Docker to use these credentials
    if [[ -n "$acr_username" && -n "$acr_password" ]]; then
        log_info "Configuring Docker with ACR credentials"
        echo "$acr_password" | execute_cmd "docker login \"$registry_name.azurecr.io\" -u \"$acr_username\" --password-stdin"
    fi
}

# Prepare Container Apps Environment
prepare_container_apps_environment() {
    local environment_name="${ENVIRONMENT_PREFIX}-${PROJECT_PREFIX}-BackendContainerAppsEnv"
    local container_app_name="${ENVIRONMENT_PREFIX}-${PROJECT_PREFIX}-worker"
    local registry_url="${ENVIRONMENT_PREFIX}${PROJECT_PREFIX}contregistry.azurecr.io"

    log_info "Preparing Container Apps Environment: $environment_name"

    # Create Container Apps Environment if not exists
    if ! az containerapp env show --name "$environment_name" --resource-group "$PROJECT_RESOURCE_GROUP" &>/dev/null; then
        log_warning "Container Apps Environment does not exist. Creating..."
        execute_cmd "az containerapp env create \
            --name \"$environment_name\" \
            --resource-group \"$PROJECT_RESOURCE_GROUP\" \
            --location \"$PROJECT_LOCATION\""
    fi

    # Output environment and app details for reference
    log_info "Environment Name: $environment_name"
    log_info "Container App Name: $container_app_name"
    log_info "Registry URL: $registry_url"
}

# Build and deploy container
deploy_container_app() {
    local environment_name="${ENVIRONMENT_PREFIX}-${PROJECT_PREFIX}-BackendContainerAppsEnv"
    local container_app_name="${ENVIRONMENT_PREFIX}-${PROJECT_PREFIX}-worker"
    local registry_url="${ENVIRONMENT_PREFIX}${PROJECT_PREFIX}contregistry.azurecr.io"
    local repo_url="https://github.com/Atinga-Solutions/atinga-webapp"
    local branch="main"

    log_info "Deploying Container App: $container_app_name"

    # Deploy container app with valid parameters
    execute_cmd "az containerapp up \
        --name \"$container_app_name\" \
        --resource-group \"$PROJECT_RESOURCE_GROUP\" \
        --environment \"$environment_name\" \
        --repo \"$repo_url\" \
        --branch \"$branch\" \
        --registry-server \"$registry_url\" \
        --ingress external \
        --target-port 3000"

    # Update container app settings
    log_info "Configuring Container App scaling and resources"
    execute_cmd "az containerapp update \
        --name \"$container_app_name\" \
        --resource-group \"$PROJECT_RESOURCE_GROUP\" \
        --cpu 0.25 \
        --memory 0.5Gi \
        --min-replicas 1 \
        --max-replicas 10"

    # Optional: Disable public ingress if internal service
    # execute_cmd "az containerapp ingress disable \
    #     --name \"$container_app_name\" \
    #     --resource-group \"$PROJECT_RESOURCE_GROUP\""
}

# Main deployment workflow
main() {
    # Parse command line arguments first
    parse_arguments "$@"
    
    # Configuration and setup must happen FIRST
    initialize_configuration
    apply_environment_override
    validate_configuration
    ensure_log_directory

    # Now safe to use LOG_FOLDER
    local timestamp
    timestamp=$(date +"%Y%m%d_%H%M%S")
    local log_file="${LOG_FOLDER}/deploy_worker_${timestamp}.log"

    # Redirect output to log file and console
    exec > >(tee -a "$log_file") 2>&1

    log_info "Starting Container App Deployment Workflow"
    log_info "Script version: 1.1.0"

    # Check Docker permissions
    check_docker_permissions

    # Azure deployment steps
    setup_azure_context
    prepare_container_registry
    prepare_container_apps_environment
    deploy_container_app

    log_success "Deployment completed successfully"
    log_info "Detailed logs available at: $log_file"
}

# Execute main function with error handling
main "$@"