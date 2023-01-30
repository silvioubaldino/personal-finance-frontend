FROM node:19-alpine3.16

RUN mkdir /front-app
WORKDIR /front-app
COPY package.json ./
COPY package-lock.json ./
COPY .. ./
RUN npm install -g npm@9.4.0
RUN npm i --legacy-peer-dep
CMD ["npm", "run", "start"]