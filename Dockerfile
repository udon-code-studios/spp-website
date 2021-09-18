# Dockerfile
FROM node:14

# copy app to container
ADD . /app

# set working directory
WORKDIR /app

# install dependencies
RUN ["npm", "install"]

# build for production
RUN ["npm", "run", "build"]

# expose port 3000
EXPOSE 3000

# launch server
CMD ["npm", "run", "start"]