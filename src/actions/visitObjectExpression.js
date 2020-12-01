const index = require("./index")

module.exports = function (node) {
  let obj = {}
  const { visitNode } = index
  node.properties.forEach(prop => {
    const key = visitNode(prop.key)
    const value = visitNode(prop.value)
    obj[key] = value
  })
  return obj
};
