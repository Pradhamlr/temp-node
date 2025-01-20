const {readFileSync,writeFileSync} = require("fs")
const path = require("path")

console.log("start")

const first = readFileSync("./content/first.txt","utf8")
const second = readFileSync("./content/second.txt","utf8")

writeFileSync("./content/result.txt",`${first} ${second}`, {flag: "a"})

const result = readFileSync("./content/result.txt","utf8")

console.log("done with this task")

console.log("starting next task")