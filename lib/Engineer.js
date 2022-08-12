const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (id, name, email, gitHub) {
      super(id, name, email, "Engineer", "fa-solid fa-glasses")
      this.gitHub = gitHub;
    }  

    getGitHub(){
        return this.gitHub;
    }
}

module.exports = Engineer;