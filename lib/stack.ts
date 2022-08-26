import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class CdkStack extends Stack{
    constructor (scope:Construct,id:string,props?:StackProps){
    super (scope,id,props)
    
    const bucket1 = new Bucket (this,"s3-b1",{
        bucketName: 's3-b1',
        removalPolicy:RemovalPolicy.DESTROY,
        autoDeleteObjects:true,
    })
    const bucket2 = new Bucket (this,"s3-b2",{
        bucketName: 's3-b2',
        removalPolicy:RemovalPolicy.DESTROY,
        autoDeleteObjects:true,
    })
} 
}