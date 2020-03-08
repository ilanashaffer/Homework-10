// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");
// const OUTPUT_DIR = path.resolve(__dirname, "output")
// const outputPath = path.join(OUTPUT_DIR, "team.html");
// const render = require("./lib/htmlRenderer");
​
console.log("Welcome! Let's gather some information about you.");

// basic starter questions

const starterQuestions = [

    {
      type: "list",
      name: "employeeType",
      message: "Select role:",
      choices: ["Employee", "Engineer", "Intern", "Manager"]
    }
  
  ];


function starterPrompt() {

    inquirer.prompt(starterQuestions).then(function(data) {
      
        console.log(data.choices);
    
          // next prompt
      
        });
    
};

starterPrompt();