// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.officeNumber = officeNumber;
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
  
    getOfficenNumber() {
      console.log(this.officeNumber);
    }
  }

module.exports = Manager;