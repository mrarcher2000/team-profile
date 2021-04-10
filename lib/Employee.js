function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    // console.log(name, id, email);
};

Employee.prototype.getName = function() {
    // console.log(this.name);
    return this.name;
};

Employee.prototype.getId = function() {
    // console.log(this.id);
    return this.id;
};

Employee.prototype.getEmail = function () {
    //console.log(this.email);
    return this.email;
};

Employee.prototype.getRole = function() {
    return 'Employee';
};

module.exports = Employee;