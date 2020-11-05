# Specify a base image
FROM node:alpine

# Install npm dependencies
WORKDIR /usr/app
COPY ./ ./
RUN npm install

# Default command
CMD ["npm", "start"]