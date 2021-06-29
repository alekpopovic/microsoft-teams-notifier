FROM node:14-alpine

RUN apk update && apk --no-cache --virtual build-dependencies add python make g++ git curl jq

RUN yarn global add @nestjs/cli

WORKDIR /usr/src/app

COPY . ./

RUN yarn global add @nestjs/cli
RUN yarn install
RUN yarn build

CMD ["nest", "start", "--watch"]