const os = require("os")

// console.log(`System Uptime is ${os.uptime()} Seconds`)

// const user = os.userInfo()
// os.
// console.log(user)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    version: os.version()
}

console.log(os)
