# Dockerfile
FROM node:14

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .




# Expose port 3000
EXPOSE 3000

# Start development server
#   NOTE: For a production build, comment out the next line and uncomment the 
#         two following lines.
CMD ["npm", "run", "dev"]
#RUN ["npm", "run", "build"] # Build app for production
#CMD ["npm", "run", "start"] # Launch server