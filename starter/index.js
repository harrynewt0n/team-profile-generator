const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const teamMembers = [];
const teamID = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.
function menu () {
    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name?",
                validate: answer => {
                  if (answer !== "") {
                    return true;
                  }
                  return "Please enter at least one character.";
                }
              },
              {
                type: "input",
                name: "managerId",
                message: "What is the team manager's id?",
                validate: answer => {
                  const pass = answer.match(
                    /^[1-9]\d*$/
                  );
                  if (pass) {
                    return true;
                  }
                  return "Please enter a positive number greater than zero.";
                }
              },
        {
                type: "input",
                name: "managerEmail",
                message: "What is the team manager's email?",
                validate: answer => {
                  const pass = answer.match(
                    /\S+@\S+\.\S+/
                  );
                  if (pass) {
                    return true;
                  }
                  return "Please enter a valid email address.";
                }
              },
              {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the team manager's office number?",
                validate: answer => {
                  const pass = answer.match(
                    /^[1-9]\d*$/
                  );
                  if (pass) {
                    return true;
                  }
                  return "Please enter a positive number greater than zero.";
                }
              }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            teamID.push(answers.managerId);
            createTeam();
        });
    }


    function createTeam() {
        
    }
}
