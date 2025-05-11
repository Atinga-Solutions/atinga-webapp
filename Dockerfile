# Specify the base image
FROM node:22.2.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install project dependencies
RUN npm install

# Bundle app source inside Docker image
COPY ./src ./src
# Also copy the public directory which contains your assets
COPY ./public ./public
# Copy any configuration files needed at the root
COPY next.config.js ./
COPY tsconfig.json ./
COPY tailwind.config.js ./
COPY postcss.config.js ./
COPY components.json ./
COPY .env.local ./
# Copy the .env file if it exists

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD ["npm", "run", "dev"]