// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
const Choice = require('inquirer/lib/objects/choice');
// TODO: Create an array of questions for user input
const questions = [
{
 type: "input", 
 message: "What is the title of your App?",
 name: "title"   
},
{
    type: "input", 
    message: "What is your GitHub username?",
    name: "GitHub"   
   },
   {
    type: "input", 
    message: "What does the app do?",
    name: "description"   
   },
   {
   type: "list",
   message: "What type of licence do you want to choose?",
   name: "license",
   choices: ["Apache", "MIT", "Other", "GPLv3"]
   },
   {type: "list",
   message: "what does the README contain?",
   name: "tableofcontent",
   choices: [ "Description", "Installation", "Usage", "License", "Contributors", "Tests", "Questions?"]
},
   {type: "input",
   message: "Do you have any questions? Contact me",
   name:"questions",
   choices: ["phone","e-mail", "GitHub",]
   }
]
;

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() 
{
    inquirer.prompt(questions)
    .then(responses=>{fs.writeFileSync("ReadMe.md", generateMarkdown(responses))})
}

// Function call to initialize app
init();
