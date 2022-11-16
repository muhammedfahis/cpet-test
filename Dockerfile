FROM ubuntu

FROM node:14-alpine as buildFile
WORKDIR /var/app
COPY package.json .
RUN npm install
RUN npm i -g pm2
COPY . .







FROM nginx:alpine
COPY --from=buildFile /var/app/nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*

EXPOSE 3000 80
COPY --from=buildFile /var/app/client/build/ /usr/share/nginx/html
VOLUME /usr/share/nginx/html
VOLUME /etc/nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]



