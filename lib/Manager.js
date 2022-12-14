const Employee = require('./Employee');

class Manager extends Employee {
    constructor (id, name, email, officeNumber) {
      super(id, name, email, "Manager","fa-solid fa-mug-hot")
      this.officeNumber = officeNumber;
    }  
    getOfficeNumber(){
      return this.officeNumber;
    }
}

module.exports = Manager;