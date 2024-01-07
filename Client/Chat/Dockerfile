FROM node:18.18.2-alpine3.18

# Set the working directory
WORKDIR /app/chat

# Copy the application code to the container

COPY . .

# Install dependencies
RUN yarn
RUN yarn build
RUN yarn global add serve

# Expose the port on which the application will run
EXPOSE 8000

# Start the application
CMD ["serve", "-l", "8000", "-s", "build"]
