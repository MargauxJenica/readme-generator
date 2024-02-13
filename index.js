const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a descrition of your project: ',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter the usage instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license does this project use?',
      options: ['No License', 'Apache', 'Cloud Native Computing Foundation', 'GNU', 'npm packages', 'OpenBSD', 'Rust', 'WordPress', 'Joomla', 'MIT'],
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Provide guidelines for contributing to this project:',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter test instructions:',
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub username: ',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email: ',
    },
  // ])
  // .then((response) =>
  //   response.confirm === response.password
  //     ? console.log('Success!')
  //     : console.log('You forgot your password already?!')
  // );
