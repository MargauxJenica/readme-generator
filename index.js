const fs = require('fs'); // imports the fs (file system) library for reading and writing files
const inquirer = require('inquirer'); // npm package for handling interactive command-line prompts
const generateMarkdown = require('./utils/generateMarkdown'); // importing the generateMarkdown functionality 

inquirer
  .prompt([ // prompts to be displayed in the command-line interface
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
      choices: ['No License', 'Apache', 'Cloud Native Computing Foundation', 'GNU', 'npm packages', 'OpenBSD', 'Rust', 'WordPress', 'Joomla', 'MIT'],
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
  ])
  .then((response) => {

   const readmeGenerator = generateMarkdown(response);

 // write to the README.md in the generated_readme folder
 fs.writeFile('./generated_readme/README.md', readmeGenerator, (err) =>
  err ? console.log(err) : console.log('Success! Your README for your project was created!')
);
  });