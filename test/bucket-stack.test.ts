import '@aws-cdk/assert/jest';
import * as cdk from '@aws-cdk/core';
import * as CdkIntro from '../lib/bucket-stack';

test('Bucket Stack', () => {
    const app = new cdk.App();
    const stack = new CdkIntro.BucketStack(app, 'MyTestStack');
    expect(stack).toHaveResource('AWS::S3::Bucket', {});
});
