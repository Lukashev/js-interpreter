const acorn = require("acorn");
const fs = require("fs");
const Interpreter = require("./src");

const pathToFile = process.argv[2];
const buffer = fs.readFileSync(pathToFile).toString();

const result = acorn.parse(buffer).body;

new Interpreter(result);
