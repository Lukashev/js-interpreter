const index = require("./index")

module.exports = function (node) {
  return node.elements.map((element) => index.visitNode(element))
}
