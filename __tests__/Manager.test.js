const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test("return manager's office number", () => {
    const manager = new Manager('Bob', 2, 'bob@bobmail.com', 122);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("get employee role (manager)", () => {
    const manager = new Manager('Bob', 2, 'bobmail.com', 122);

    expect(manager.getRole()).toMatch(/Manager/);
});