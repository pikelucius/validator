const validator = require("../lib/validator");

const chai = require("chai"),
  expect = chai.expect,
  validatorWith = require("../lib/validator"),
  nonPositiveValidationRule = require("../lib/rules/nonPositive"),
  nonDivisibleValidationRule = require("../lib/rules/nonDivisible");

function expectedToIncludeErrorWhenInvalid(errObj) {
  const number = errObj.number,
    error = errObj.error;
  it(`like ${number}`, () => {
    expect(validator(number)).to.include(error);
  });
}

describe("A Validator", () => {
  let validator;
  before(() => {
    validator = validatorWith([
      nonPositiveValidationRule,
      nonDivisibleValidationRule(3, "error.three"),
      nonDivisibleValidationRule(5, "error.five")
    ]);
  });

  it("will return no errors for valid numbers", () => {
    expect(validator(7)).to.be.empty;
  });


describe("will include error.nonpositive for not strictly positive numers:", () => {
  it("like 0", () => {
    expect(validator(0)).to.include("error.nonpositive");
  });

  it("like -2", () => {
    expect(validator(-2)).to.include("error.nonpositive");
  });
});

describe("will include error.three for divisible by 3 numbers:", () => {
  it("like 3", () => {
    expect(validator(3)).to.include("error.three");
  });

  it("like 15", () => {
      expect(validator(15)).to.include("error.three");
  });
});

describe("will return error.five for divisible by 5 numbers:", () => {
  it("like 5", () => {
    expect(validator(5)).to.include("error.five");
  });
  it("like 15", () => {
    expect(validator(15)).to.include("error.five");
  });
});
});