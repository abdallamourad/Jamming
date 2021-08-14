FROM node:14.17.5-alpine

WORKDIR /Jamming

COPY . .

RUN npm install

CMD ["npm", "start"]
