const index = require("./index")

module.exports = function (node) {
  const { operator } = node
  return eval(`${operator}${index.visitNode(node.argument)}`)
};