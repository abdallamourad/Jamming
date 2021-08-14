FROM node:14.17.5-alpine

WORKDIR /Jamming

COPY package.* .

RUN npm install

ADD . .

CMD ["npm", "start"]
