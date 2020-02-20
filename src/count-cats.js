module.exports = function countCats(matrix) {
  if (matrix && matrix.length){
    return matrix.map(item => {
      return item.filter(i => {
        return i === "^^"
      }).length
    }).reduce((a, b) => a + b)
  }
  return 0
};
