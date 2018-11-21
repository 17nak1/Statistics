//* Probability density function for the Normal distribution ~ N(mu, sigma)
//* P(x) = a * exp((x-mu)^2/2 * (sigma)^2)
// * generate N numbers in [0,1] with a normal distribution that can be random (if random = true)
let exp = 2.718281828
const normalDist = function (a, sigma, mu, xB, xE, N, random = false) {
  let arr = [], val
  if (random) {
    while (arr.length < N) {
      val = Math.random() * N 
      if (xB <= val <= xE) {
        arr.push(a * Math.pow(exp, -Math.pow((val - mu), 2) / 2 * (sigma ** 2)))
      }
    }
  } else {
    let step = (xE - xB) / (N - 1) 
    for (let i = xB; i <= xE; i += step) {
      arr.push(a * Math.pow(exp, -Math.pow((i - mu), 2) / 2 * (sigma ** 2)))
    }
  }
  return arr
}
