const index = require("./index");

module.exports = function (node) {
  let body = [];
  for (const child of node.body) {
    body.push(index.visitNode(child));
  }
  return body;
};
