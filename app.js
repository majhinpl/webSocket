const express = require("express")
const app = express()

const {Server} = require('socket.io')

const port = 4000;


const server = app.listen(port,()=>{
    console.log("Server listening ...")
})


const io = new Server(server) // it takes two parameter

io.on('connection', (socket) => { 

    // console.log("Someone has connected!!");
    // socket.emit("hi", {
    //     greeting : "Hello how are you"
    // });


    socket.on('sendData', (data) => {

        console.log(data)

        if(data) {
            
            io.to(socket.id).emit("response","Thank you your data was received")

  
            // socket.emit("response","Thank you your data was received")
        }
    });

    // socket.on("disconnect", () => {
    //     console.log("Disconnected a user")
    // })
});