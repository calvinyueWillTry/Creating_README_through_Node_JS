// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');
//const nodeChallenge = require("./utils/generateMarkdown");
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
    // .then(function ({license, inquirer, nodeChallenge, generateMarkdown}) {
    //     const htmlPage = createHTML(license, inquirer, nodeChallenge, generateMarkdown);
    //     console.log(htmlPage);
    //     fs.writeFile("index.html", htmlPage, (err) => 
    //     err ? console.log(err) : console.log("html created"));
    // })
];
//console.log(questions);//this is getting through
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)//can't read prompt?
    .then((inquirerResponses) => {
        console.log("arc", inquirerResponses);
        //generateMarkdown(inquirerResponses)//This is the problem spot? 
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    })
};
// Function call to initialize app
init();
// const userName = questions.userName
// axios.get(`https://api.github.com/users/${userName}`)
// .then(questions => {
//   console.log(questions.data);
// });