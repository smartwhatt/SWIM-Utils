FROM node:12

ARG port=8080
ARG weather

ENV PORT=$port
ENV WEATHER_KEY=$weather

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE $port

CMD [ "npm", "run", "start" ]
