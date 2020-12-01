const index = require('./index')

module.exports = function (node) {
  function iteration() {
    const loopActive = index.visitNode(node.test)
    if (loopActive) {
      index.visitNode(node.body)
      iteration()
    }
  }
  return iteration()
};