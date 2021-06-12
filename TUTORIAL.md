# Outline

1. What is CDK https://docs.aws.amazon.com/cdk/latest/guide/home.html
    - Abstraction on top of Cloudformation
    - Deveoper Preview released 08/2018: https://aws.amazon.com/blogs/developer/aws-cdk-developer-preview/, GA 07/2019 https://aws.amazon.com/about-aws/whats-new/2019/07/the-aws-cloud-development-kit-aws-cdk-is-now-generally-available1/
    - Multiple programming languages supported
    - Build-in test support for TypeScript
    - High-level constructs: App, Stack, Constructs, ...  https://docs.aws.amazon.com/cdk/latest/guide/core_concepts.html
    - Separate libs for each service (changes in version 2: https://docs.aws.amazon.com/cdk/latest/guide/work-with-cdk-v2.html)
    - Some advantages over plain cloudformation
        - Ability to extract shared functionality into constructs and reuse, even as shared libraries
        - Eases things e.g. certificates are created automatically
        - allows for more advanced setups e.g. loops
        - Simplifed deployment commands
    - Some disadvantages
        - Same as every abstraction...
        - you might not realize what's going on under the hood, harder to troubleshoot
        - lots of magic e.g. lambdas to update resource policies or dependencies between stacks voa export/import
        - you need have software development knowledge after all you write code

        
# Tutorial 

Goal: Deploy a S3 bucket incl. test

1. Project structure
    - bin, lib, test
        - bin: main stack
        - lib: constructs
    - what do you need?
        - AWS CLI
        - AWS CDK or install via npm
1. Define resource
    1. show docs, explain structure https://docs.aws.amazon.com/cdk/api/latest/docs/aws-s3-readme.html
    1. Add s3 dependency `npm install -D @aws-cdk/aws-s3`
    1. Define bucket
    1. Add test https://docs.aws.amazon.com/cdk/latest/guide/testing.html
1. Deploy
    - Include in stack
    - synth 
        - generated IDs
        - Logical Names
    - deploy
    - view in consolte
    - Add
      - environment
      - tags        
      - snapshot test
1. Destroy
    - retention settings
    - auto delete objects
3. Make change
    - extend test
    - adapt snapshot test
    - deploy



# Advanced
- dependencies betweek stacks (import, export)
- multiple environments