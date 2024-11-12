
# Use the official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["sh", "-c", "npm run build && npm run start"]