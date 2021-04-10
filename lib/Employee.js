function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    console.log(name, id, email);
};

module.exports = Employee;