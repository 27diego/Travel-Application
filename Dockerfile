FROM node:12.14.0
WORKDIR /usr/src/TravelApp
COPY ./ ./
RUN npm install -g pm2
RUN yarn install