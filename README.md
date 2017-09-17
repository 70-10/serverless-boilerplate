# Serverless Boilerplate

Serverless Framework Boilerplate.

## Required

- Node v6.10

## Usage

### deploy

```
$ npm install
$ AWS_PROFILE=<YOUR PROFILE> npm run deploy
```

### invoke

```
$ AWS_PROFILE=<YOUR PROFILE> npx sls invoke --function <function_name> -s <stage>
```

#### local

```
$ npx sls invoke local --function <function_name>
```

#### local for APIGateway

Required `serverless-offline`.

```
$ npm run dev
```

### test

```
$ npm test
```
