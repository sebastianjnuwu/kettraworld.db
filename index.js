const JsonDatabase = require("./src/Json");
const Dotenv = require("./src/Env");
const mysql = require("./src/index.js");
const fs = require("fs");
const colors = require("colors");

module.exports = { JsonDatabase, Dotenv, mysql, fs, colors };
