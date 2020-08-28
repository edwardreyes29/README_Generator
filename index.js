const inquirer = require("inquirer");
const fs = require("fs");
console.log("```");
// array of questions for user
const questions = [
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "username"
    },
    {
        type: "input",
        message: "Enter your email:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter project URL:",
        name: "url"
    },
    {
        type: "input",
        message: "Enter project title:",
        name: "title"
    },
    {
        type: "input",
        message: "Enter short description:",
        name: "description"
    },
    {
        type: "list",
        message: "Select License:",
        name: "license",
        choices: [
            'MPL-2.0',
            'AGPL-3.0',
            'GPL-3.0',
            'LGPL-3.0',
            'Apache-2.0',
            'MIT',
            'BSL-1.0'
        ]
    },
    {
        type: "input",
        message: "Enter commands to install dependencies:",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "Enter commands to enter to run test:",
        name: "test",
        default: "npm test"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribution"
    }
];
// Generate Markdown
// Badge for top app ![WeatherApp](https://img.shields.io/github/languages/top/edwardreyes29/WeatherApp)
// Badge [![Generic badge](https://img.shields.io/badge/<SUBJECT>-<STATUS>-<COLOR>.svg)](https://shields.io/)
// function to write README file
function writeToFile(fileName, data) {
    const markdownText = `# ${data.title}\n`+
    `[![GitHub License](https://img.shields.io/badge/License-${data.license}-<COLOR>.svg)](https://shields.io/)\n\n`+
    `## Tables of Contents\n\n`+
    `* [Description](#description)\n\n` +
    `* [Installation](#installation)\n\n` +
    `* [Usage](#usage)\n\n` +
    `* [License](#license)\n\n` +
    `* [Contributing](#contributing)\n\n` +
    `* [Tests](#tests)\n\n` +
    `* [Questions](#questions)\n\n` +
    `## Description\n\n` +
    `${data.description}\n\n` +
    `## Installation\n\n` +
    `To install the necessary dependencies, run the following command:\n\n` +
    "```\n" + data.installation + "\n```\n\n" +
    `## Usage\n\n`+
    `${data.usage}\n\n` +
    `## License\n\n` +
    `This project is licensed under the ${data.license}.\n\n` +
    `## Contributing\n\n` +
    `${data.contribution}\n\n` +
    `## Tests\n\n` +
    "```\n" + data.test + "\n```\n\n"+
    `## Questions\n\n`+
    `If you have any questions about the repo, open an issue or contact [${data.username}](${data.url}) directly at ${data.email}`;
    
    fs.writeFile(fileName, markdownText, (err) => {
        if (err) throw err;
        console.log('README.md file has been created');
    });
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(function(response) {
        writeToFile("README.md", response);
    })
}

// function call to initialize program
init();
