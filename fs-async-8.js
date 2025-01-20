const {readFile, writeFile} = require("fs")

console.log("start")

readFile("./content/first.txt","utf8", function (err, result) {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile("./content/second.txt","utf8", function (err, result) {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile("./content/result-async.txt", `Hello there: ${first} ${second} `, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log("done with this task")
        })
    })
})

console.log("starting next task")

readFile("./content/result-async.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
})

console.log("starting next next task")