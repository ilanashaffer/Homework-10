const http = require("http");
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// not sure the purposes of the below?
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

const employees = [];

console.log("Welcome! Let's gather some information.");

const starterQuestions = [

    {
      type: "list",
      name: "employeeType",
      message: "Select role:",
      choices: ["Engineer", "Intern", "Manager"]
    }
  
];

function starterPrompt() {

    inquirer.prompt(starterQuestions).then(function(data) {

        if (data.employeeType == 'Engineer') {
            engineerPrompt();
        } else if (data.employeeType == 'Intern') {
            internPrompt();
        } else {
            managerPrompt();
        }
        
    });
};

starterPrompt();

const addAnotherQuestion = [

    {
        type: "list",
        name: "addAnother",
        message: "Would you like to add another team member?",
        choices: ["Yes", "No, I'm done."]
    }

];

function addAnotherPrompt(){
    inquirer.prompt(addAnotherQuestion).then(function(data){
        if(data.addAnother == "Yes"){
            starterPrompt();
        } else {

            fs.writeFile(__dirname + '/output/team.html', render(employees), function (err) {
                if (err) throw err;
                console.log('Saved! See your team here: http://localhost:8000/');
              });

        }
    });
};


const engineerQuestions = [

    {
        type: "input",
        name: "name",
        message: "Full name:"
    },
    {
        type: "input",
        name: "id",
        message: "Employee id:"
    },
    {
        type: "input",
        name: "email",
        message: "Email:"
    },
    {
        type: "input",
        name: "github",
        message: "Enter Github username:"
    }

];

function engineerPrompt() {
    inquirer.prompt(engineerQuestions).then(function(data){
        const newEngineer = new Engineer(data.name, data.id, data.email, data.github)
        employees.push(newEngineer);
        addAnotherPrompt();
    });
};

const internQuestions = [

    {
        type: "input",
        name: "name",
        message: "Enter full name:"
    },
    {
        type: "input",
        name: "id",
        message: "Enter id:"
    },
    {
        type: "input",
        name: "email",
        message: "Email:"
    },
    {
        type: "input",
        name: "school",
        message: "Enter School:"
    }

];

function internPrompt() {
    inquirer.prompt(internQuestions).then(function(data){
        const newIntern = new Intern(data.name, data.id, data.email, data.school);
        employees.push(newIntern);
        addAnotherPrompt();
    });
};

const managerQuestions = [

    {
        type: "input",
        name: "name",
        message: "Enter full name:"
    },
    {
        type: "input",
        name: "id",
        message: "Enter id:"
    },
    {
        type: "input",
        name: "email",
        message: "Email:"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Office number:"
    }

];

function managerPrompt() {
    inquirer.prompt(managerQuestions).then(function(data){
        const newManager = new Manager(data.name, data.id, data.email, data.officeNumber);
        employees.push(newManager);
        addAnotherPrompt();
    });
};

// html

function onRequest(request, response) {
    
    fs.readFile(__dirname + '/output/team.html', null, function(error, data) {
        if (error) throw error;
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
}

// server

http.createServer(onRequest).listen(8000);