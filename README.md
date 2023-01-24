# sam-cli-esbuild-top-level-await
Small project to demo an issue with top level await when using AWS Sam CLI and esbuild

## Problem

I would like to use the [NodeJS top level await feature](https://aws.amazon.com/about-aws/whats-new/2022/01/aws-lambda-es-modules-top-level-await-node-js-14/) with AWS Sam and esbuild. A esbuild complimation error of `Top-level await is not avaliable in the configure target environment ("es2020")`


## Replcate

With the [AWS Sam CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html) installed run `sam build -t template.yaml`.
