FROM ubuntu

FROM node:14-alpine as buildFile
WORKDIR /var/app
COPY package.json .
RUN npm install
RUN npm i -g pm2
COPY . .
CMD [ "npm","start" ]




