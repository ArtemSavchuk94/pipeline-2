import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import { CdkStage } from './stage';
// import * as sqs from 'aws-cdk-lib/aws-sqs';


export interface Pipeline2StackProps extends cdk.StackProps { 
  branchName:string
}
export class Pipeline2Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: Pipeline2StackProps) {
    super(scope, id, props);

   const pipeline = new CodePipeline( this,"my-pipeline2",{
    pipelineName:'my-piplene2',
    synth: new ShellStep('Synth',{commands:['npm ci','npm run build',`npx synth ${this.stackName}`],
    input: CodePipelineSource.gitHub('ArtemSavchuk94/pipeline2',props.branchName)
   })

  })
   

    pipeline.addStage(new CdkStage(this,'stage',))

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'Pipeline2Queue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
