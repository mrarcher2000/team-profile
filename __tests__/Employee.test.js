const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test ('create an Employee obj', () => {
    const employee = new Employee('Bob', 2, 'bob@bobmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});


test('get name of an employee', () => {
    const employee = new Employee('Bob', 2, 'bobmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('get employee id number', () => {
    const employee = new Employee('Bob', 2, 'bobmail.com');

    expect(employee.getId()).toBeGreaterThan(0);
});

test('get employee email', () => {
    const employee = new Employee('Bob', 2, 'bobmail.com');
    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('get employee role (employee)', () => {
    const employee = new Employee('Bob', 2, 'bobmail.com');

    expect(employee.getRole()).toMatch(/Employee/);
});