const express=require('express')
const http=require('http')

const path=require('path')
const socketio=require('socket.io')
const app=express()
const server=http.Server(app)
const io=socketio(server)

const SERVER_PORT= process.env.PORT || 3434


//app.use(express.json())
//app.use(express.urlencoded({extended: true}))

io.on('connection',function(socket){
    console.log("Socket created :"+socket.id)
    
    socket.on('play',function(data){
        io.emit('play',data)
    })
})

app.use('/',express.static(__dirname + "/public"))
app.use('/musicroom',express.static(__dirname+ "/public/music_room.html"))


server.listen(SERVER_PORT,()=>{
    console.log("server started at "+SERVER_PORT)
});