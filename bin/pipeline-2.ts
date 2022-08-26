#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Pipeline2Stack } from '../lib/pipeline-2-stack';

const app = new cdk.App();
const mainStack = new Pipeline2Stack(app, 'mainStack',{
  branchName:'main',
  stackName:'mainStack',
});

const devStack = new Pipeline2Stack(app, 'devStack',{
  branchName:'dev',
  stackName:'devStack',
});