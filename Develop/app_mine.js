const http = require("http");
const fs = require("fs");
const inquirer = require("inquirer");

console.log("Welcome! Let's gather some information.");

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

        if (data.employeeType == 'Employee') {
            employeePrompt();
        } else if (data.employeeType == 'Engineer') {
            engineerPrompt();
        } else if (data.employeeType == 'Intern') {
            internPrompt();
        } else {
            managerPrompt();
        }
        
    });
};

starterPrompt();

const employeeQuestions = [

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
        name: "job",
        message: "Job Title:"
    },
    {
        type: "input",
        name: "email",
        message: "Email:"
    },
    {
        type: "input",
        name: "username",
        message: "Enter Github username:"
    }

];

function employeePrompt() {
    inquirer.prompt(employeeQuestions).then(function(data){
        // print data to html page
        console.log(data);
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
        name: "job",
        message: "Job Title:"
    },
    {
        type: "input",
        name: "email",
        message: "Email:"
    },
    {
        type: "input",
        name: "username",
        message: "Enter Github username:"
    }

];

function engineerPrompt() {
    inquirer.prompt(engineerQuestions).then(function(data){
        // print data to html page
        console.log(data);
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
        name: "job",
        message: "Job Title:"
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
        // print data to html page
        console.log(data);
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
        name: "job",
        message: "Job Title:"
    },
    {
        type: "input",
        name: "email",
        message: "Email:"
    },
    {
        type: "input",
        name: "office",
        message: "Office number:"
    }

];

function managerPrompt() {
    inquirer.prompt(managerQuestions).then(function(data){
        // print data to html page
        console.log(data);
    });
};

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./templates/engineer.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write("File not found!");
        } else {
            response.write(data);
        }
        response.end();
    });
}

http.createServer(onRequest).listen(8000);