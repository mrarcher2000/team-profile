const Engineer = function(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
};

Engineer.prototype.getGithub = function(){
    return this.github;
};

Engineer.prototype.getRole = function() {
    return 'Engineer';
};

module.exports = Engineer;