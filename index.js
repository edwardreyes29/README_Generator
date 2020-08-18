const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Enter Project Title:",
        name: "title"
    },
    {
        type: "input",
        message: "Enter Description: ",
        name: "description"
    }
];

inquirer
    .prompt(questions)
    .then(function(response) {
        console.log(response);
    })
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
