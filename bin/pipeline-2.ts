#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Pipeline2Stack } from '../lib/pipeline-2-stack';

const app = new cdk.App();
const mainStack = new Pipeline2Stack(app, 'main-pipeline2',{
  branchName:'main',
  stackName:'main-pipeline2',
});

const devStack = new Pipeline2Stack(app, 'dev-pipeline2',{
  branchName:'dev',
  stackName:'dev-pipeline2',
});