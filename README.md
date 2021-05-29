# Subpar Programming Website

To serve over HTTP:
```
sudo docker run -d --rm --name spp_website -p 80:80 -v $(pwd):/usr/share/nginx/html nginx:latest

sudo docker stop spp_website
```

To serve over HTTPS, follow instructions at https://github.com/subparprogramming/https-docker, and bind this directory to its `html` web root directory (e.g. `sudo mount --bind ./ ../https-docker/html/`).

test