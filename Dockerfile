FROM node:16.13.2

WORKDIR /the/workdir/path

COPY package*.json ./

RUN yarn

COPY . .

ENV PORT=3001

EXPOSE 3001

CMD ["yarn", "start"]