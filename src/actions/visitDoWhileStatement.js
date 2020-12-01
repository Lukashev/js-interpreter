const index = require('./index')

module.exports = function (node) {
  function iteration() {
    index.visitNode(node.body)
    const loopActive = index.visitNode(node.test)
    if (loopActive) {
      iteration()
    }
  }
  return iteration()
};