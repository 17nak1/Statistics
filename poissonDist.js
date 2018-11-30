//* Probability mass function for the Poisson distribution (pmf)
// lambda represents the rate of occurrence
var poisson ={}
let exp = 2.718281828
poisson.dist = function (lambda = 1, x = 0) {
  let ans, total = 0
  if (isNaN(x) || isNaN(lambda) || lambda < 0) {
    return NaN
  }
  if (!Number.isInteger(x)) {
    return 0
  }
  if (x < 0 || !isFinite(x)) {
    return 0
  }
  x = Math.round(x)
  ans = -lambda + x * Math.log(lambda)
  for (let i = 1; i <= x; i++) {
    total += Math.log(i)
  }
  let logAns = ans - total
  return Math.exp(logAns)
}

function factorial (intValue) {
  var i, nextNumber, carret, result
  if (intValue === 0) {
    return '1'
  }
  if (!intValue) {
    return ''
  }
  result = intValue.toString().split('').reverse().map(Number)
  while (--intValue) {
    i = carret = 0
    while ((nextNumber = result[i++]) !== undefined || carret) {
      carret = (nextNumber || 0) * intValue + carret
      result[i - 1] = carret % 10
      carret = parseInt(carret / 10)
    }
  }
  return result.reverse().join('')
}
module.exports = poisson


