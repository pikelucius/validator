module.exports = (divisor, error) => {
  return (n, result) => {
    if (n % divisor === 0) result.push(error);
  };
};
