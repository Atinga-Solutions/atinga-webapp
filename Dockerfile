# Specify the base image
FROM node:22.2.0

# Set the working directory in the container
WORKDIR /app

# Install dependencies (leverage Docker cache)
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Create necessary configuration files if they don't exist
RUN if [ ! -f next.config.js ]; then \
    echo "/** @type {import('next').NextConfig} */\nconst nextConfig = {};\nmodule.exports = nextConfig;" > next.config.js; \
fi

RUN if [ ! -f tailwind.config.js ]; then \
    echo "/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  content: ['./src/**/*.{js,ts,jsx,tsx}'],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n};" > tailwind.config.js; \
fi

RUN if [ ! -f postcss.config.js ]; then \
    echo "module.exports = {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {},\n  },\n};" > postcss.config.js; \
fi

# Expose the port the app runs on
EXPOSE 3000

# Build the Next.js application
RUN npm run build

# Command to run the application
CMD ["npm", "run", "dev"]