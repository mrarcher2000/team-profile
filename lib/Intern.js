const Intern = function(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
};

Intern.prototype.getSchool = function(){
    return this.school;
};

Intern.prototype.getRole = function() {
    return 'Intern';
};

module.exports = Intern;