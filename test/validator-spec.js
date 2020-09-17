var assert = require("assert");
const validator = require("../lib/validator");


describe("A Validator", function () {
  it("will return error.nonpositive for not strictly positive numbers", function () {
    assert.deepStrictEqual(validator(0), ["error.nonpositive"]);
  });
});
