FROM node:16.3.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

COPY ./dist ./dist

CMD ['npm', 'run', 'start:dev']

