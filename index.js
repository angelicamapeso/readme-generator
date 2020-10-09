const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of this project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe this project:',
  },
  {
    type: 'input',
    name: 'instalation',
    message: 'How do you install this project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use this project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license does this project fall under?',
    choices: [
      'License 1',
      'License 2',
      'License 3',
      ],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How may others contribute to this project?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What are some tests for this project?',
  },
  {
    type: 'input',
    name: 'userName',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
  inquirer
  .prompt(questions)
  .then(answers => {
    console.log(answers);
  });
}

// function call to initialize program
init();
