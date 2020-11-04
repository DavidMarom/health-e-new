
module.exports = connectSockets
let msgs=[]

function connectSockets(io) {
    io.on('connection', socket => {
        // socket.on('get chat history',topic=>{
        //     io.emit('chat history', msgs)
        // })
        socket.emit('chat history', msgs)
        socket.on('chat newMsg', msg=>{
            // console.log(msg)
            msgs.push(msg)
            // io.emit('chat addMsg', msg)
            // emits only to sockets in the same room
            io.to(socket.myTopic).emit('chat addMsg', msg)
        })
        socket.on('chat topic', topic=>{
            console.log(topic);
            if (socket.myTopic) {
                socket.leave(socket.myTopic)
            }
            socket.join(topic)
            socket.myTopic = topic;
            console.log(socket.myTopic );
        })
        socket.on('creatorId', id=>{
            if (socket.creatorId) {
                socket.leave(socket.creatorId)
            }
            socket.join(id)
            socket.creatorId = id;
        })
        socket.on('new purchase', purchaseInfo=>{
            io.to(purchaseInfo.creatorId).emit('show purchase notifiction', purchaseInfo)
        })

    })
}

