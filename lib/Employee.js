class Employee {
    constructor (id, name, email, role) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.role = role;
    }  

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role ?? "Employee";
    }
}

module.exports = Employee;