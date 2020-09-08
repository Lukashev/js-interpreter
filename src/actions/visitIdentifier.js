const index = require("./index")

module.exports = function (node) {
  const { globalScope } = global
  const current = globalScope.get("current")
  if (current) {
    const currentScope = globalScope.get(current)
    const payload = currentScope.get(node.name)
    if (payload && payload.value) {
      return payload.value
    }
    return payload || node.name
  }
  const scopeValue = globalScope.get(node.name)
  return index.notEmpty(scopeValue) ? scopeValue : node.name
}
