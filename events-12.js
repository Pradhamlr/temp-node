const eventEmitter = require("events")

const customEmitter = new eventEmitter()

customEmitter.on("request", ()=> {
    console.log("Hello World!")
})

customEmitter.on("request", ()=> {
    console.log("Hello")
})

customEmitter.emit("request")
customEmitter.emit("request")