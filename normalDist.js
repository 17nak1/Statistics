//* CDF of normal distribution ~ N(mu, sd)
var normal = {}
let exp = 2.718281828
let pi = 3.141592654
var erf = require( 'math-erf' )
normal.pnorm = function (x, mu = 0, sd = 1,lower_tail = true, give_log = false) {
  if (sd < 0) {
    return NaN
  }
  let ans = 1 / 2 *(1 +  erf((x - mu)/sd / Math.sqrt(2)))
  if(!lower_tail) {
     ans = 1- ans 
  }
  if(give_log) {
    ans = Math.log(ans)
  }
  return ans
}
//* Generate a random number with normal distibution
mathLib.rnorm = function (mu = 0, sd = 1) { 
  var val = Math.sqrt( -2.0 * Math.log(rng()) ) * Math.cos( 2.0 * pi * rng())
  return val * sd + mu
}
module.exports = normal;
