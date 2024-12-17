# Use an official Node.js 20 image as the base
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port Vite uses
EXPOSE 5173

# Command to start the Vite dev server
CMD ["npm", "run", "dev"]
