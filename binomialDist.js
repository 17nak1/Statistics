//* Binomial distribution
var binomial = {}
binomial.dist = function (k = 0 ,n = 1, p = 0.5){
  if (k > n) {
    return NaN
  }
  var logBinom = logsum(n - k + 1, n) - logsum(2, k) +k * Math.log(p) +(n - k) * Math.log (1 - p)
  return Math.exp(logBinom)
}
binomial.logsum = function (lowerBound, upperBound) {
  var sum = 0;
  for(i = lowerBound; i <= upperBound; i++){
    sum += Math.log(i); 
  }
  return sum
}
module.exports = binomial;
