const index = require("./index")

module.exports = function (node) {
  index.visitNode(node.init)
  function iteration() {
    const loopActive = index.visitNode(node.test)
    if (loopActive) {
      index.visitNode(node.body)
      index.visitNode(node.update)
      iteration()
    }
  }
  return iteration()
}
