const {readFile, writeFile} = require("fs").promises
// const util = require("util")
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)



const start = async () => {
    try {
        const first = await readFile("./content/first.txt", "utf8")
        const second = await readFile("./content/second.txt", "utf8")
        await writeFile("./content/output.txt", `THIS IS AWESOME: ${first} ${second}`)
        const third = await readFile("./content/output.txt", "utf8")
        console.log(first, second)
        console.log(third)
    } catch (error) {
        console.log(error)
    }
}

start()

// getText("./content/first.txt")
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// const getText = (path) => {
//     return new Promise ((resolve , reject) => {
//         readFile(path,"utf8",(err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }