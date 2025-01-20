const {pradham,john} = require("./names-2")
const {sayHi,sayBye} = require("./functions-4")


// console.log(names)
// console.log(functions)

function greetuser(cb, name) {
    cb(name)
}

const hi = sayHi("Pradham Sir")

console.log(hi)




greetuser(sayHi, pradham)
greetuser(sayBye, john)

