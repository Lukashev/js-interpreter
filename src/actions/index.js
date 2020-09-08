const visitExpressionStatement = require("./visitExpressionStatement")
const visitVariableDeclaration = require("./visitVariableDeclaration")
const visitVariableDeclarator = require("./visitVariableDeclarator")
const visitLiteral = require("./visitLiteral")
const visitIdentifier = require("./visitIdentifier")
const visitCallExpression = require("./visitCallExpression")
const visitBinaryExpression = require("./visitBinaryExpression")
const visitFunctionDeclaration = require("./visitFunctionDeclaration")
const visitBlockStatement = require("./visitBlockStatement")
const visitReturnStatement = require("./visitReturnStatement")
const visitAssignmentExpression = require("./visitAssignmentExpression")
const visitForStatement = require("./visitForStatement")
const visitUpdateExpression = require("./visitUpdateExpression")
const visitArrayExpression = require("./visitArrayExpression")
const visitMemberExpression = require("./visitMemberExpression")

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
  AssignmentExpression: visitAssignmentExpression,
  ForStatement: visitForStatement,
  UpdateExpression: visitUpdateExpression,
  ArrayExpression: visitArrayExpression,
  MemberExpression: visitMemberExpression,
}

const visitNodes = function (nodes) {
  //console.log(nodes)
  for (const node of nodes) {
    actionList[node.type](node)
  }
}

const visitNode = function (node) {
  return actionList[node.type](node)
}

const createScope = function (node) {
  let currentScope = global.globalScope
  currentScope.set(node.name, new Map())
  global.globalScope = currentScope
}

const setScope = function (scopeName) {
  global.globalScope.set("current", scopeName)
}

const getScope = function (scopeName) {
  return global.globalScope.get(scopeName)
}

const updateScope = function (key, value) {
  const scopeName = getScope("current")
  if (scopeName) {
    let currentScope = global.globalScope.get(scopeName)
    currentScope.set(key, value)
    global.globalScope.set(scopeName, currentScope)
  } else {
    global.globalScope.set(key, value)
  }
}

const notEmpty = function (value) {
  return value !== undefined && value !== null
}

module.exports.visitNodes = visitNodes
module.exports.visitNode = visitNode
module.exports.createScope = createScope
module.exports.setScope = setScope
module.exports.getScope = getScope
module.exports.updateScope = updateScope
module.exports.actionList = actionList
module.exports.notEmpty = notEmpty
