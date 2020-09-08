const index = require("./index")

const operations = {
  "+=": (l, r) => l + r,
  "-=": (l, r) => l - r,
  "*=": (l, r) => l * r,
  "/=": (l, r) => l / r,
}

module.exports = function (node) {
  const leftNode = index.visitNode(node.left)
  const rightNode = index.visitNode(node.right)
  return index.updateScope(
    node.left.name,
    operations[node.operator](
      typeof leftNode === "object" ? leftNode.value : leftNode,
      typeof rightNode === "object" ? rightNode.value : rightNode
    )
  )
}
