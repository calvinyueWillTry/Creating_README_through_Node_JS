// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("one")
  if (license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } 
  else if (license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license === "SD 2 Clause") {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  }
  else if (license === "Morzilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else {
    return `no license`
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(link) { //add one for github link?
  console.log("two")
  return `The Github link is `+link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string, needs if/else statement
function renderLicenseSection(license) { //what company the license is with?
  console.log("three")
  if (license === "Apache 2.0") {
    return `https://www.apache.org/licenses/LICENSE-2.0`
  } 
  else if (license === "MIT"){
    return `https://www.mit.edu/~amini/LICENSE.md`
  }
  else if (license === "BSD 2 Clause") {
    return `https://opensource.org/license/bsd-2-clause`
  }
  else if (license === "Mozilla Public License 2.0") {
    return `https://www.mozilla.org/en-US/MPL/2.0/`
  }
  else {
    return `The ${license} was not included in this array of options`
  }
}
//[Link] (#link) and [How to Contribute] (#how to contribute) not working
const  createreadME = (data) => {
  return `# ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents 
 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Link] (#link) 
  - [How to Contribute] (#how to contribute)
  
  ## Installation
  ${data.instructions}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  ${data.credits}

  ## License 
  ${renderLicenseBadge (data.license)}
  ${renderLicenseSection (data.license)}

  ##Link
  ${renderLicenseLink(data.link)}
  
  ## How to Contribute
  ${data.contribution}

  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Tests
  ${data.test}
  
  This page was updated 4 months ago
  © 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
  
  Category: github
  
  Tagged under: github, guide,`
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { //the only one being exported. License from string under question.name in other JS.
console.log("signal flowing")
return createreadME(data);
//   return `# ${data.title} 
// ${renderLicenseBadge(data.license)}
// ${renderLicenseLink(data.license)} 
// ${renderLicenseSection(data.license)}`
;
}
module.exports = generateMarkdown;
