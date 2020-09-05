const index = require("./index");

const availableKinds = ["var"];

module.exports = function (node) {
  if (!availableKinds.includes(node.kind))
    throw new Error("Available ECMAscript: ES5");
  const id = index.visitNode(node.id);
  const initValue = index.visitNode(node.init);
  const { globalScope } = global;
  const current = globalScope.get("current");
  if (current) {
    let currentScope = global.globalScope.get(current);
    currentScope.set(id, {
      kind: node.kind,
      value: initValue,
    });
    global.globalScope.set(current, currentScope);
  } else {
    global.globalScope.set(id, {
      kind: node.kind,
      value: initValue,
    });
  }
};
