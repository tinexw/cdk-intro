# Outline

1. What is CDK
    - Abstracction on top of Cloudformation
    - Multiple programming languages supported
    - Build-in test support for TypeScript
    - Constructs, ... 
    - Separate libs for services   
    - Advantages over plain cloudformation
        - Eases things e.g. certificates are created automatically
        - allows for more advanced setups e.g. loops
        - Simplifed deployment commands
    - Disadvantages
        - Same as every abstraction...
        - you might not realize what's going on under the hood, harder to troubleshoot
        - lots of magic e.g. lambdas to update resource policies or dependencies between stacks voa export/import
        - you need have software development knowledge after all you write code

        
# Tutorial 

Goal: Deploy a S3 bucket, test

1. Project structure
    - bin, lib, test
        - bin: main stack
        - lib: constructs
    - what do you need?
        - AWS CLI
        - AWS CDK or install via npm
1. Define resource
    1. Add s3 dependency
    2. Define bucket
1. Include in stack
    - environment
    - tags        
1. Test
    - assert
    - snapshot
1. Deploy
    - synth
    - deploy
    - view in consolte
1. Make change
    - extend test
    - adapt snapshot test
    - deploy



# Advanced
- dependencies betweek stacks (import, export)
- multiple environments
