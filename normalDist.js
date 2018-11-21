//* CDF and PDF of normal distribution ~ N(mu, sd)
var normal = {}
let exp = 2.718281828
let pi = 3.141592654
var erf = require( 'math-erf' )
normal.pnorm = function (x, mu = 0, sd = 1,lower_tail = true, give_log = false) {
  if (sd < 0) {
    return NaN
  }
  let ans = 0.5 + 0.5 * erf((x - mu) / Math.sqrt(2) * sd)
  if(!lower_tail) {
     ans = 1- ans 
  }
  if(give_log) {
    ans = Math.log(ans)
  }
  return ans
}
normal.rnorm = function (n, mu = 0, sd = 0) {
  let arr = [], val, a = 1 / Math.sqrt(2 * pi * Math.pow(sd, 2))
  if (sd < 0) {
    return NaN
  }
    while (arr.length < n) {
      val = Math.random() * n 
      arr.push(a * Math.exp(-Math.pow((val - mu), 2) / 2 * (sd ** 2)))
  }
  return arr
}
module.exports = normal;
