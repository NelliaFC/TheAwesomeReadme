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
    message: "What does the app do?",
    name: "description"   
   },

   {
    type: "input",
    message: "What are the installation instructions for this project?",
    name: "installation",
   },

   {
    type: "input",
    message: "How to use this application?",
    name: "usage",
   },
   
   {
    type: "input",
    message: "Names of contributors to this project",
    name: "contributors",
   },
   
   {
   type: "list",
   message: "Choose your license",
   name: "license",
   choices: ["Apache", "MIT", "Other", "GPLv3"]
   },

   {
    type: "input",
    message: "What are the TEST instructions?",
    name: "test",
   },

   {
    type: "input",
    message: "What is your GitHub name?",
    name: "github",
    
},
   {
   type: "input",
   message: "What is your e-mail address?",
   name:"email",
   
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
