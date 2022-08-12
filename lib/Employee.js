class Employee {
    constructor (id, name, email, role, icon) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.role = role;
      this.icon = icon;
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