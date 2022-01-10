#FROM node:12-alpine AS build
#
#RUN apk update && apk add git
#
#RUN mkdir -p /app
#
#WORKDIR /app
#
#COPY package.json .
#COPY package-lock.json .
#
#RUN npm install
#
#COPY . .
#
#RUN npm run build
#
## -----------------
#
#FROM node:12-alpine
#
#RUN mkdir -p /app
#
#WORKDIR /app
#
#COPY package.json .
#COPY package-lock.json .
#
#RUN npm install --production
#
#COPY --from=build ./app/dist/login-demo ./dist
#COPY ./server.js .
#COPY ./api-server.js .
#COPY ./auth_config.json .
#
#ENV NODE_ENV=productionENV SERVER_PORT=4200
#ENV API_SERVER_PORT=3001
#
#EXPOSE 4200
#EXPOSE 3001
#
#CMD ["npm", "run", "prod"]
#
#### STAGE 1: Build ###
#FROM node:12.7-alpine AS build
#WORKDIR /usr/src/app
#COPY package.json package-lock.json ./
#RUN npm install
#COPY . .
#RUN npm run build
#
#### STAGE 2: Run ###
#FROM nginx:1.17.1-alpine
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY --from=build /usr/src/app/dist/aston-villa-app /usr/share/nginx/html

### STAGE 1: Build ###
FROM node:12.7-alpine AS build
RUN apk update && apk add git
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Generate self signed ssl cert ###
FROM node:12.7-alpine AS nodessl
### Needed this because nginx for some reason doesn't allow apk :)
RUN apk update \
    && apk add openssl
RUN mkdir -p /etc/nginx/ssl
RUN chmod 700 /etc/nginx/ssl
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/example.key -out /etc/nginx/ssl/example.crt -subj "/C=NL/ST=Noord-Brabant/L=Wouw/O=Softwarefull/OU=IT Student/CN=example.com"

### STAGE 3: Run ###
FROM nginx:1.17.1
RUN mkdir -p /etc/nginx/ssl
RUN chmod 700 /etc/nginx/ssl
COPY --from=nodessl /etc/nginx/ssl /etc/nginx/ssl
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/login-demo /usr/share/nginx/html
EXPOSE 433
EXPOSE 80



