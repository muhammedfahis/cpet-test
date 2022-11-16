FROM ubuntu

FROM node:14.19.1 as buildFile
WORKDIR /var/app
COPY package.json .
RUN npm install
RUN npm i -g pm2
COPY . .
RUN npm start




FROM nginx 
EXPOSE 80
COPY --from=buildFile /var/app/client/build/ /usr/share/nginx/html

