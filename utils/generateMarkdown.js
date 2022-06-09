// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `https://img.shields.io/badge/License-${license}-blue.svg`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache_2.0':
      return `https://opensource.org/licenses/Apache-2.0`
      break;
    case 'MIT':
      return `https://opensource.org/licenses/MIT`
      break;
    case 'GPL':
      return `https://www.gnu.org/licenses/gpl-3.0`
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'None') {
    return `This project is licensed under the ${license} license. <br />
![GitHub License](${renderLicenseBadge(license)}) <br />
(${renderLicenseLink(license)})`
  } else {
    return ``
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  #${data.description}
  #Table of Contents
  * [Installation](##installation)
  * [Usage](##Usage)
  * [License](##License)
  * [Contributing](##contributing)
  * [Tests](##tests)
  * [Questions](##questions)
  ## Installation
  Please do the following to run the application: ${data.installation}
  ## Usage
  In order to use this app: ${data.usage}
  ## License
 ${renderLicenseSection(data.license)}
  ## Contributing
  Contributors: ${data.contributing}
  ## Tests
  The following is needed to run the test: ${data.tests}
  ## Questions
  If you have any questions or issues with the application, please reach out to ${data.name} with the information provided below: <br />
  [${data.githubUser}](https://github.com/${data.githubUser}) <br />
  ${data.email}
`;
}

module.exports = generateMarkdown;