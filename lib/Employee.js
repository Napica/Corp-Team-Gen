// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
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
  getRole() {
    console.log(this.role);
  }
}

module.exports = Employee;
