import { Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { CdkStack } from "./stack";

export class CdkStage extends Stage {
    constructor(scope:Construct,id:string,props?:StageProps){
    super(scope,id,props)
    


  new CdkStack(this,"s3")
}
}