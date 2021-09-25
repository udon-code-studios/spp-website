# Subpar Programming Website

This multi-container app serves a server-side rendered HTTPS website using NGINX as the reverse proxy and SSL handshake provider. Certbot is used to automate the certificate renewall process with [Let's Encrypt CA](https://letsencrypt.org).

The website should be 😅 live here: [subparprogramming.org](https://subparprogramming.org)

## `nuxt-app/`

The nuxt-app/ directory contains the source code for the NuxtJS application. From this directory, a development server can be launched with:
```
$ npm install
$ npm run dev
```
A Dockerfile is also supplied in this directory for containerized development and/or deployment.

## `https-config.md`

This file contains instructions for initial HTTPS server configuration.

Once the key and certificate is obtained, the web server can be built and launched using docker-compose:

```
$ sudo docker-compose up -d
```

Stop the web server using the following command:

```
$ sudo docker-compose down
```

## `docker-compose.yml`

This file defines the services that make up the spp-website app. 

- A NGINX container handles SSL handshakes and serves as a reverse proxy to host the Nuxt app. It reloads every 6 hours in case of updated certificates.
- A Certbot container serves as a Let's Encrypt CA client which attempts to renew certificates every 12 hours.
- A Node container builds and serves a Nuxt app with server-side rendering.
