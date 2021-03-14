#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkIntroStack } from '../lib/cdk-intro-stack';

const app = new cdk.App();
new CdkIntroStack(app, 'CdkIntroStack');
