const visitExpressionStatement = require("./visitExpressionStatement");
const visitVariableDeclaration = require("./visitVariableDeclaration");
const visitVariableDeclarator = require("./visitVariableDeclarator");
const visitLiteral = require("./visitLiteral");
const visitIdentifier = require("./visitIdentifier");
const visitCallExpression = require("./visitCallExpression");
const visitBinaryExpression = require("./visitBinaryExpression");
const visitFunctionDeclaration = require("./visitFunctionDeclaration");
const visitBlockStatement = require("./visitBlockStatement");
const visitReturnStatement = require("./visitReturnStatement");

const actionList = {
  VariableDeclaration: visitVariableDeclaration,
  ExpressionStatement: visitExpressionStatement,
  VariableDeclarator: visitVariableDeclarator,
  Literal: visitLiteral,
  Identifier: visitIdentifier,
  CallExpression: visitCallExpression,
  BinaryExpression: visitBinaryExpression,
  FunctionDeclaration: visitFunctionDeclaration,
  BlockStatement: visitBlockStatement,
  ReturnStatement: visitReturnStatement,
};

const visitNodes = function (nodes) {
  for (const node of nodes) {
    actionList[node.type](node);
  }
};

const visitNode = function (node) {
  return actionList[node.type](node);
};

const createScope = function (node) {
  let currentScope = global.globalScope;
  currentScope.set(node.name, new Map());
  global.globalScope = currentScope;
};

const setScope = function (scopeName) {
  global.globalScope.set("current", scopeName);
};

const getScope = function (scopeName) {
  return global.globalScope.get(scopeName);
};

module.exports.visitNodes = visitNodes;
module.exports.visitNode = visitNode;
module.exports.createScope = createScope;
module.exports.setScope = setScope;
module.exports.getScope = getScope;
