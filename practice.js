
function helper(v1, v2, operation) {
  return operation(v1, v2);
}

function multiplyBiggerNumByTwo(num1, num2) {
  const bigNum = helper(num1, num2, Math.max);
  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  const bigNum = helper(num1, num2, Math.max);
  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  const bigNum = helper(sum1, sum2, Math.max);
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  const smallDog = helper(weight1, weight2, Math.min);
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
