const {sep,join,basename,resolve} = require("path")

console.log(sep)

console.log(__filename)

const filePath = join("content","result.txt")

console.log(filePath)

console.log(basename(__filename))


const absolute = resolve(__dirname,"folder","test.txt")
console.log(absolute)