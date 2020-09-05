module.exports = function (node) {
  return Object.assign(node.argument, { kind: node.type });
};
