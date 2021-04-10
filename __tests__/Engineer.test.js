const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test("get engineer's github profile", () => {
    const engineer = new Engineer('Bob', 2, 'bob@bobmail.com', 'username');

    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("get employee's role (engineer)", () => {
    const engineer = new Engineer('Bob', 2, 'bob@bobmail.com', 'username');

    expect(engineer.getRole()).toMatch(/Engineer/);
});