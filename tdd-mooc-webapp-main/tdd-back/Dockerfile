FROM node:20-alpine as back

WORKDIR /app

COPY . .

RUN npm install

CMD ["node", "index.js"]