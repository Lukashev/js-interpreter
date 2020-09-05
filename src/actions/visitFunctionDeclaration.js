const index = require("./index");

module.exports = function (node) {
  const id = index.visitNode(node.id);

  index.createScope(node.id);
  global.globalScope.set("current", node.id.name);

  let params = [];
  for (const param of node.params) {
    params.push(index.visitNode(param));
  }

  const argument = index.visitNode(node.body);

  const currentScope = index.getScope(node.id.name);
  let fnScope = currentScope || new Map();
  fnScope.set("params", params);
  fnScope.set(
    "body",
    argument.filter((item) => item)
  );

  for (const param of params) {
    fnScope.set(param, undefined);
  }

  global.globalScope.set(node.id.name, fnScope);
  index.setScope(null);
};
