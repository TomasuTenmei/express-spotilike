FROM node:18

WORKDIR /backend/app/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3141

CMD [ "node", "server.js" ]