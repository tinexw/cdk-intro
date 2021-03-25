#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { BucketStack } from '../lib/bucket-stack';

const app = new cdk.App();
new BucketStack(app, 'BucketStack');