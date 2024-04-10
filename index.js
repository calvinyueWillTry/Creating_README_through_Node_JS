// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: "input",
        message: "what is your title?",
        name: "title"
    },
    {
        type: "list",
        message: "please enter your license badge!",
        choices: ["Apache 2.0", "MIT", "BSD 2 Clause", "Mozilla Public License 2.0"],
        name: "license"
    },
    {
        type: "input",
        message: "please enter a description",
        name: "description"
    },
    {
        type: "input",
        message: "enter instructions for how to create a README",
        name: "instructions"
    },
    {
        type: "input",
        message: "please provide input concerning usage information",
        name: "usage" 
    },
    {
        type: "input",
        message: "who do you credit for helping you create this document?",
        name: "credits" 
    },
    {
        type: "input",
        message: "Please enter your email.",
        name: "email"
    },
    {
        type: "input",
        message: "what are the guidelines for contributing to this document?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What public Github link are you using this license in?",
        name: "link"
    },
    {
        type: "input",
        message: "How will you be testing this?",
        name: "test"
    },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) { //writes the structure
    fs.writeFileSync(fileName, data) //writes file in this format at 78 inside init()
    //could add 'README.md' right here.
};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)//
    .then((inquirerResponses) => {
        console.log(inquirerResponses);
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
        writeToFile('filename.md', `${inquirerResponses}`)
    })
};
init();
//console.log(questions);//this is getting through
//generateMarkdown(inquirerResponses)//This is the problem spot? 
// .then(function ({license, inquirer, nodeChallenge, generateMarkdown}) {
    //     const htmlPage = createHTML(license, inquirer, nodeChallenge, generateMarkdown);
    //     console.log(htmlPage);
    //     fs.writeFile("index.html", htmlPage, (err) => 
    //     err ? console.log(err) : console.log("html created"));
    // })
//filename, data = gene...
// Function call to initialize app

// const userName = questions.userName
// axios.get(`https://api.github.com/users/${userName}`)
// .then(questions => {
//   console.log(questions.data);
// });