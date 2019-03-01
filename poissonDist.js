//* Probability mass function for the Poisson distribution (pmf)
// lambda represents the rate of occurrence
var poisson ={}
let exp = 2.718281828
poisson.dist = function (lambda = 1) {
  let k = 0; p = 1; l
  l = Math.exp(-lambda)
  if (isNaN(lambda) || lambda < 0) {
    return NaN
  }
  while (p > l) { 
    k += 1
    p = p * Math.random()
  }
  return k-1
}

module.exports = poisson
