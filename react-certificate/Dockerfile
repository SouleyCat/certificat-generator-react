# Use the official Node.js image for the build stage
FROM node:14-alpine as build

# Set the working directory to /app inside the build stage
WORKDIR /app

# Copy package.json and package-lock.json from the frontend directory to /app
COPY react-certificate/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files from the frontend directory to /app
COPY react-certificate .

# Build the React app
RUN npm run build

# Use a lightweight nginx image for the final stage
FROM nginx:alpine

# # Copy the built React app from the build stage to the nginx public directory
# COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
