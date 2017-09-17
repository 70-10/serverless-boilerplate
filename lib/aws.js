import AWS from "aws-sdk";

AWS.config.update({
  region: "ap-northeast-1",
});
AWS.config.setPromisesDependency(Promise);

export default AWS;
