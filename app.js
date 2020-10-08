const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

const team = [];

const questionsPrompt = [
  {
    type: "confirm",
    message: "Would you like to add a team member?",
    name: "startQuestion",
  },
];

const anotherMember = [
  {
    type: "confirm",
    message: "Would you like to add another member?",
    name: "anotherMember",
  },
];

const typeOfTeamMember = [
  {
    type: "list",
    message: "Please select which kind of member you would like to add:",
    choices: ["Manager", "Engineer", "Intern"],
    name: "typeOfMember",
  },
];

const managerQuestions = [
  {
    type: "input",
    message: "What is your manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your manager's ID#?",
    name: "ID",
  },
  {
    type: "input",
    message: "What is your manager's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your manager's office number?",
    name: "number",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: " What is your engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your engineer's ID#?",
    name: "ID",
  },
  {
    type: "input",
    message: "What is your engineer's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your engineer's GitHub username?",
    name: "gitHub",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is your intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your intern's ID #?",
    name: "ID",
  },
  {
    type: "input",
    message: "What is your intern's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your intern's school?",
    name: "school",
  },
];

// Function to start the initial quesitons

function questions() {
  inquirer
    .prompt(questionsPrompt)
    .then(function (data) {
      if (data.startQuestion === true) {
        memberType();
      } else {
        console.log(
          "There are no members on your team. Please run node again if you would like to add members to your team."
        );
        end();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

// function to add team members

function addToTeam() {
  inquirer
    .prompt(anotherMember)
    .then(function (data) {
      if (data.anotherMember === true) {
        memberType();
      } else {
        end();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

// function to as to what type of member the user can choose from

function memberType() {
  inquirer
    .prompt(typeOfTeamMember)
    .then(function (data) {
      if (data.typeOfMember === "Manager") {
        managerQ();
      } else if (data.typeOfMember === "Engineer") {
        engineerQ();
      } else if (data.typeOfMember === "Intern") {
        internQ();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

// functions for specific member type:
// Manager class
function managerQ() {
  inquirer.prompt(managerQuestions).then(function (data) {
    var newManager = new Manager(data.name, data.ID, data.email, data.number);
    team.push(newManager);
    addToTeam();
  });
}

// Engineer Class
function engineerQ() {
  inquirer.prompt(engineerQuestions).then(function (data) {
    var newEngineer = new Engineer(data.name, data.ID, data.email, data.gitHub);
    team.push(newEngineer);
    addToTeam();
  });
}

// Intern Class
function internQ() {
  inquirer.prompt(internQuestions).then(function (data) {
    var newIntern = new Intern(data.name, data.ID, data.email, data.school);
    team.push(newIntern);
    addToTeam();
  });
}

// Function to initialize Node

function init() {
  console.log("Please generate your team below:");
  questions();
}

init();

// Function to end the function and create the dynamically generated website

function end() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFile(outputPath, render(team), function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Success");
  });
}
