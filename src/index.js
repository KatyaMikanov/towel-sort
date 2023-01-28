
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result =[]
  let lastResult = []
if (Array.isArray(matrix) === true) {
for (i=0; i<matrix.length; i++) {
  if(i%2 === 0) {
     result.push(matrix.at(i))
  } else result.push(matrix.at(i).reverse())
}
for (let subArr of result) {
 for (let elem of subArr) {
   lastResult.push(elem);
 }
}
} else lastResult = [];
  return lastResult
}
