const index = require("./index")

module.exports = function (node) {
  const { value: obj } = index.visitNode(node.object)
  const prop = index.visitNode(node.property)
  return obj[typeof prop.value !== 'undefined' ? prop.value : prop]
}
