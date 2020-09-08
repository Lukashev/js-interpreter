const index = require("./index")

function evalArgs(args) {
  let result = []
  for (const arg of args) {
    const c = index.visitNode(arg)
    result.push(typeof c === "object" ? c.value : c)
  }
  return result
}

module.exports = function (node) {
  const args = evalArgs(node.arguments)
  const calleeName = node.callee.name

  if (calleeName === "print") {
    return console.log(...args)
  }
  const fnScope = global.globalScope.get(calleeName)
  const params = fnScope.get("params")

  for (const key in params) {
    fnScope.set(params[key], args[key])
  }
  global.globalScope.set(calleeName, fnScope)

  const body = fnScope.get("body")

  index.setScope(calleeName)
  let result = undefined

  for (let childNode of body) {
    const value = index.visitNode(childNode)
    if (childNode.kind === "ReturnStatement") {
      result = value
      break
    }
  }
  index.setScope(null)
  return result
}
