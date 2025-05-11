# Build stage
FROM node:22.2.0 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:22.2.0-slim
WORKDIR /app
COPY --from=builder /app/build ./build
COPY package*.json ./
RUN npm ci --production
EXPOSE 3000
CMD ["npm", "start"]