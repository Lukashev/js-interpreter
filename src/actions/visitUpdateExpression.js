const index = require("./index")

module.exports = function (node) {
  let result = null
  let { value, kind } = index.visitNode(node.argument)
  switch (node.operator) {
    case "++":
      result = value + 1
      break
    case "--":
      result = value - 1
      break
  }
  index.updateScope(node.argument.name, { value: result, kind })
  return result
}
