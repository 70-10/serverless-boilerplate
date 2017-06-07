# Serverless Boilerplate

Serverless Framework Boilerplate.

## Required

- Node v6.10

## Usage

### deploy

```
$ npm install --production
$ AWS_PROFILE=<YOUR PROFILE> sls deploy -s <stage> -v
```

### invoke

```
$ AWS_PROFILE=<YOUR PROFILE> sls invoke --function <function_name> -s <stage>
```

#### local

```
$ sls invoke local --function <function_name>
```

#### local for APIGateway

Required `serverless-offline`.

```
$ sls offline start
```

### test

```
$ npm test
```
