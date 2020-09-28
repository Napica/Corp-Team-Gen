// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }
  getName() {
    console.log(this.name);
  }

  getID() {
    console.log(this.id);
  }
  getEmail() {
    console.log(this.email);
  }

  getGithub() {
    console.log(this.github);
  }
}

module.exports = Engineer;
