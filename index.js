#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const execa = require('execa');
const Listr = require('listr');
const resolveGlobal = require('resolve-global');
const Enquirer = require('enquirer');
const enquirer = new Enquirer();

enquirer.register('confirm', require('prompt-confirm'));

var ejs = require('ejs')
var fs = require('fs')
var minimatch = require('minimatch')
var mkdirp = require('mkdirp')
var path = require('path')
var sortedObject = require('sorted-object')
var util = require('util')

 /***
  * 
  * clear the console & write with figlet the CLI Tool Name
  * 
 */
clear();
console.log(
  chalk.blue.bold(
    figlet.textSync('Docker Express', {
      horizontalLayout: 'full'
    })
  )
);
/*** 
 * Start Enquirer to 
*/
let expressString = 'express '

const questions = [
  {
    type: 'confirm',
    name: 'chocolate',
    message: 'Like chocolate?'
  },
  {
    type: 'confirm',
    name: 'vanilla',
    message: 'Like vanilla?'
  }
];

enquirer.ask(questions)
.then(function(answers) {
  console.log(answers)
});


