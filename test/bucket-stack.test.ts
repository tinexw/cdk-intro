import '@aws-cdk/assert/jest';
import * as cdk from '@aws-cdk/core';
import * as assert from '@aws-cdk/assert';
import * as CdkIntro from '../lib/bucket-stack';
import { ResourcePart } from '@aws-cdk/assert';

describe('Enviromment name applied', () => {
  test('Bucket name contains environment name', () => {
    const app = new cdk.App();
    const stack = new CdkIntro.BucketStack('foo', app, 'MyTestStack');

    expect(stack).toHaveResource('AWS::S3::Bucket', {
      BucketName: 'my-bucket-foo'
    });
  });
  test('Environment name applied as tag', () => {
    const app = new cdk.App();
    const stack = new CdkIntro.BucketStack('foo', app, 'MyTestStack');

    assert.expect(stack).to(assert.haveResourceLike('AWS::S3::Bucket', {
      Tags: assert.arrayWith(
        {
          Key: 'environment',
          Value: 'foo'
        }
      )
    }));
  });
});


test('Retention settings', () => {
  const app = new cdk.App();
  const stack = new CdkIntro.BucketStack('foo', app, 'MyTestStack');
  expect(stack).toHaveResource('AWS::S3::Bucket', {
    UpdateReplacePolicy: 'Delete',
    DeletionPolicy: 'Delete',
  }, ResourcePart.CompleteDefinition)
});



// test('Bucket is encrypted', () => {
//     const app = new cdk.App();
//     const stack = new CdkIntro.BucketStack(app, 'MyTestStack');

//     expect(stack).toHaveResource('AWS::S3::Bucket', {
//       BucketEncryption: {
//         ServerSideEncryptionConfiguration: [
//           {
//             ServerSideEncryptionByDefault: {
//               SSEAlgorithm: "AES256"
//             }
//           }
//         ]
//       }    
//     });
// });