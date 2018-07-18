#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const execa = require('execa')
const Listr = require('listr')
const resolveGlobal = require('resolve-global')
const inquirer = require('inquirer')

var ejs = require('ejs')
var fs = require('fs')
var minimatch = require('minimatch')
var mkdirp = require('mkdirp')
var path = require('path')
var program = require('commander')
var readline = require('readline')
var sortedObject = require('sorted-object')
var util = require('util')

 
clear();
console.log(
  chalk.blue.bold(
    figlet.textSync('Docker Express', {
      horizontalLayout: 'full'
    })
  )
);

let expressString = 'express '

inquirer.prompt([
  {
    name: 'expressDir',
    type: 'input',
    message: 'Where would you like to unfold your? [default: current folder]',
    default: './'
  },
  {

  }
]).then(answers => {

});

new Listr([
  {
    title: 'Installing & unfolding express-generator',
    task: () => {
      if(resolveGlobal.silent('express')){
        execa.shell('npm install -g express-generator')
        execa.shell('express --view=hbs ./tmp')
      }else{
        execa.shell('express --view=hbs ./tmp')
      }
    }
  },
  {
    title: 'Removing package-lock',
    task: () => execa('rm', ['package-lock.json'])
  },
  {
    title: 'Running npm install',
    task: () => execa('npm', ['install'])
  },
  {
    title: 'Adding package-lock to git',
    task: (ctx, task) => execa('git', ['add', 'package-lock.json']).catch(()=> task.skip())
  },
  {
    title: 'Input test',
    task: () =>{
      
    }
  }
]).run();