FROM node:8-alpine

RUN npm install -g serverless

COPY . /serverless
WORKDIR /serverless

RUN npm install

CMD ["sls", "deploy", "-v"]
