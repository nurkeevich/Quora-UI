FROM node:13-alpine3.11

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]