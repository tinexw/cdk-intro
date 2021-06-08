#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { BucketStack } from '../lib/bucket-stack';

const env = { account: '072408395743', region: 'eu-central-1' };

const app = new cdk.App();

const stackProps = {
    env,
    tags: {
      entity: 'everestate',
      environment: 'dev',
      app: 'catalog',
    },
  };

new BucketStack(app, 'BucketStack', stackProps);