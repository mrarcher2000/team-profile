// const Employee = require('./Employee');

const Manager = function(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
    
    // var manager = new Employee(this.name, this.id, this.email);
    // return manager;
};

Manager.prototype.getRole = function() {
    return 'Manager';
};

module.exports = Manager;