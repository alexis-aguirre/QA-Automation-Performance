"use strict";

const Faker = require("faker");

module.exports = {
  generateLoremIpsum,
};

function generateLoremIpsum(userContext, events, done) {
  const content = Faker.lorem.words();
  userContext.vars.content = content;
  return done();
}
