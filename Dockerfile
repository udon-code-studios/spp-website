# file: Dockerfile
#
# description...
#

# use the latest official nginx image as the parent image
#
FROM nginx:latest

# copy the website's source code to /usr/share/nginx/html
#
#COPY ./src/* /usr/share/nginx/html

# describe which port the container is listening on at runtime
#
EXPOSE 80

#
# end of file
