const index = require("./index");

const operations = {
  "-": (left, right) => left - right,
  "+": (left, right) => left + right,
  "*": (left, right) => left * right,
  "/": (left, right) => left / right,
};

module.exports = function (node) {
  const leftValue = index.visitNode(node.left);
  const rightNode = index.visitNode(node.right);
  return operations[node.operator](leftValue, rightNode.value || rightNode);
};
