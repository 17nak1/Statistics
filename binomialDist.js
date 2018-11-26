// Probability mass function for the binomial distribution
// n represents the number of trials
// p represents the probability of success in each trial
var binomial = {}
binomial.dist = function (n = 1, p = 0.5, x = 0){
  if (x > n) {
    return NaN
  }
  var logBinom = logsum(n - x + 1, n) - logsum(2, x) +x * Math.log(p) +(n - x) * Math.log (1 - p)
  return Math.exp(logBinom)
}
const logsum = function (lowerBound, upperBound) {
  var sum = 0;
  for(i = lowerBound; i <= upperBound; i++){
    sum += Math.log(i); 
  }
  return sum
}
module.exports = binomial;
