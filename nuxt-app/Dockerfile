# Dockerfile
FROM node:14

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Build app for production
RUN ["npm", "run", "build"]

# Expose port 3000
EXPOSE 3000

# launch server
# for dev server use: CMD ["npm", "run", "dev"]
CMD ["npm", "run", "start"]