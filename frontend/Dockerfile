# Use the official Node.js image with the desired version (Node 20)
FROM node:20-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Build the frontend project (if using Vite or other bundlers)
RUN npm run build

# Expose the port the app will run on (adjust if needed)
EXPOSE 3000

# Set the default command to run the app
CMD ["npm", "run", "dev"]
