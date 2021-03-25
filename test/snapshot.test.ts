import { SynthUtils } from '@aws-cdk/assert';
import { Stack } from '@aws-cdk/core';

import { BucketStack } from '../lib/bucket-stack';

test('bucket stack', () => {
  const stack = new Stack();
  new BucketStack(stack, 'TestBucketStack');
  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});