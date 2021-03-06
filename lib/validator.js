const nonPositiveValidationRule = require("./rules/nonPositive"),
  nonDivisibleValidationRule = require("./rules/nonDivisible"),
  validationRules = [
    nonPositiveValidationRule,
    nonDivisibleValidationRule(3, "error.three"),
    nonDivisibleValidationRule(5, "error.five"),
  ];

module.exports = (validationRules) => (n) => {
  return validationRules.reduce((result, rule) => {
    rule(n, result);
    return result;
  }, []);
};
