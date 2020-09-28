
const nonPositiveValidationRule = require('./rules/nonPositive'),
    nonDivisibleValidationRule = require('./rules/nonDivisible'),
    validationRules = [
        nonPositiveValidationRule,
        nonDivisibleValidationRule(3, 'error.three'),
        nonDivisibleValidationRule(5,'error.five')
    ];

module.exports = function (n) {
  return validationRules.reduce(function (result, rule) {
    rule(n, result);
    console.log(result)
    return result;
  }, []);
};
