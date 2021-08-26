

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license=== "Apache"){

  return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"


} else if (license=== "MIT"){
  return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
} else if (license=== "Other"){
  return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
} else if (license=== "GPLv3"){
  return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
}
}

// function renderLicenseBadge(license) { 
//   if (license=== "Apache"){

//   return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"


// } else if (license=== "MIT"){
//   return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
// } else if (license=== "Other"){
//   return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]"
// } else if (license=== "GPLv3"){
//   return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
// }
// }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  # Table of Content

    -[Description](#description)
    -[Installation](#installation)
    -[Usage](#usage)
    -[Contributors](#contributors)
    -[License](#license)
    -[Tests](#tests)
    -[Github](#username)
    -[E-mail](#e-mail)

    ## Description:
    ![![License](https://img.shields.io/badge/License-${data.license}-blue.svg) "License Badge"]
   

   ${data.description}
   ## Installation:
      ${data.installation}
   ## Usage:   
      ${data.usage}
   ## Contributors:   
      ${data.contributors}
   ## Test:
      ${data.test}
   ## License:
        For more inforamtion about the License, click on the link below:  
        [![License](https://opensource.org/licenses/${data.license}) 

   ## Questions:
      For questions about this project please find me on Github. Follow the link below
      -[GitHub Profile](https://github.com/${data.username})
   
      To connect via email please reach out at : ${data.email}.


  ${renderLicenseLink(data.license)}
  

`;
}

module.exports = generateMarkdown;

//note to self;  to add a new line in JS use \n