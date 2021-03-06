#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MyPipelineStack } from '../lib/htja-cdk-codepipeline-test-stack';

const app = new cdk.App();
new MyPipelineStack(app, 'CdkPipelineTestStack', {
  env: {
    account:  process.env.CDK_DEFAULT_ACCOUNT,
    region:  process.env.CDK_DEFAULT_REGION,
  }
});

app.synth();