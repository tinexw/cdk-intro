#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkBucketStack } from '../lib/cdk-bucket-stack';

const app = new cdk.App();
new CdkBucketStack(app, 'CdkIntroStack');
