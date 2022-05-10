const myArr = [10, 21, 30, 22];

const mySecondArr = myArr.map((arr) => {
  return arr * 2;
});

const getAverage = () => {
  const totalRange = mySecondArr.reduce((acc, curr) => {
    return acc + curr;
  });
  const average = totalRange / mySecondArr.length;
  return average
};

module.exports = { myArr, getAverage };
