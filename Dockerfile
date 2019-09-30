FROM node:10.15.3

WORKDIR /workspace

COPY package*.json /workspace/

RUN yarn install

COPY . /workspace/

CMD ["yarn", "start"]