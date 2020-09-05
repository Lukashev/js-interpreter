module.exports = function (node) {
  const { globalScope } = global;
  const current = globalScope.get("current");
  if (current) {
    const currentScope = globalScope.get(current);
    const payload = currentScope.get(node.name);
    if (payload && payload.value) {
      return payload.value;
    }
    return payload || node.name;
  }
  return globalScope.get(node.name) || node.name;
};
