module.exports = function reverse (n) {
    n = Math.abs(n).toString();
    let result = ''
    for (let i = (n.length - 1); i >= 0; i--) {
      result = result + n[i];
    }
  
    return Number(result);
}