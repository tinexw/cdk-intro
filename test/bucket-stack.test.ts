import '@aws-cdk/assert/jest';
import * as cdk from '@aws-cdk/core';
import * as assert from '@aws-cdk/assert';
import * as CdkIntro from '../lib/bucket-stack';

test('Retention settings', () => {
    const app = new cdk.App();
    const stack = new CdkIntro.BucketStack(app, 'MyTestStack');
    expect(stack).toHaveResource('AWS::S3::Bucket', {
        UpdateReplacePolicy: 'Delete',
        DeletionPolicy: 'Delete',
    }),
    assert.ResourcePart.CompleteDefinition;
});
