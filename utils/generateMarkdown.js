// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License'){
    return '';
  }else{
    return `![Static Badge](https://img.shields.io/badge/${license}-purple)`
  }
    
  }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const licenseBadge = renderLicenseBadge(data.license)
  // template literal of README
  const generateReadMe = ` # ${data.title}
  ${licenseBadge}

  ## Description
  
  ${data.description}

  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
${data.license}
  
  ## Tests

  ${data.test}

  ## Questions

  Please contact me regarding any inquiries, contact information is provided below:

  GitHub: ${data.username}
  Email: ${data.email}
  
`;
  return generateReadMe;
}

module.exports = generateMarkdown;
