const Employee = require('./Employee');

class Intern extends Employee {
    constructor (id, name, email, school) {
      super(id, name, email, "Intern", "fa-solid fa-user-graduate")
      this.school = school;
    }  

    getSchool (){
        return this.school;
    }
}

module.exports = Intern;