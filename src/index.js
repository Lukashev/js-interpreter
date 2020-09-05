const actions = require("./actions");
global.globalScope = new Map();
global.globalScope.set("current", null);

class Interpreter {
  constructor(nodes) {
    actions.visitNodes(nodes);
  }
}

module.exports = Interpreter;
