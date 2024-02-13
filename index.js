const fs = require('fs'); // imports the fs (file system) library for reading and writing files
const inquirer = require('inquirer'); // npm package for handling interactive command-line prompts

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
  ])
  .then((response) => {
    
  const readMe = ` # ${response.title}

  ## Description
  
  ${response.description}

  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${response.installation}
  
  ## Usage
  
  ${response.usage}
  
  ## License
  
 ${response.license}
  
  ## Tests

  ${response.test}

  ## Questions

  Please contact me regarding any inquiries, contact information is provided below:

  GitHub: ${response.username}
  Email: ${response.email}
  
 `;
  });
