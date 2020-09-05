const index = require("./index");

module.exports = function (node) {
  index.visitNodes(
    node.declarations.map((item) => ({ ...item, kind: node.kind }))
  );
};
