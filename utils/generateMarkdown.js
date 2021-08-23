

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

function renderLicenseBadge(license) { 
  if (license=== "Apache"){

  return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"


} else if (license=== "MIT"){
  return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
} else if (license=== "Other"){
  return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]"
} else if (license=== "GPLv3"){
  return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
}
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${data.GitHub}
  # ${data.description}
  # ${data.questions}
  # ${data.tableofcontent}
  \n 
   ${renderLicenseLink(data.license)}
   ${renderLicenseBadge(data.license)}

`;
}

module.exports = generateMarkdown;

//note to self;  to add a new line in JS use \n