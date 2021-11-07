FROM node:12

ARG port=8080
ARG weather
ARG news

ENV PORT=$port
ENV WEATHER_KEY=$weather
ENV NEWS_KEY=$news

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE $port

CMD [ "npm", "run", "start" ]
