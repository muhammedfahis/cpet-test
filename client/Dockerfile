FROM ubuntu

FROM node:14-alpine as buildFile
WORKDIR /var/www
RUN npm i -g pm2
COPY . .







FROM nginx:alpine
COPY --from=buildFile /var/www/nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*

EXPOSE  80 5200
COPY --from=buildFile /var/www/build/ /usr/share/nginx/html
VOLUME /usr/share/nginx/html
VOLUME /etc/nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]