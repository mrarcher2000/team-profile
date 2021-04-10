const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test ('create an Employee obj', () => {
    const employee = new Employee('Bob', 2, 'bob@bobmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});


