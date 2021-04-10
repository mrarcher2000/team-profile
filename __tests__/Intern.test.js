const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

test("get intern's school", () => {
    const intern = new Intern('Bob', 2, 'bob@bobmail.com', 'school name');

    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getSchool()).toEqual(expect.any(String));
});

test("get intern's company role (intern)", () => {
    const intern = new Intern('Bob', 2, 'bob@bobmail.com', 'school name');
    
    expect(intern.getRole()).toMatch(/Intern/);
});

