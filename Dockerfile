FROM node:12

ARG port=8080

ENV PORT=$port

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE $port

CMD [ "npm", "run", "start" ]
