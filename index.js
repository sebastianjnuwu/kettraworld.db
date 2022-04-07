const JsonDatabase = require("./src/Json");
const Dotenv = require("./src/Env");
const mysql = require("./src/index.js");
const fs = require("fs");

module.exports = { JsonDatabase, Dotenv, mysql, fs };
