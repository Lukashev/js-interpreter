const index = require("./index");

module.exports = function (node) {
  index.visitNode(node.expression);
};
