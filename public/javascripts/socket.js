const socket = io()

socket.emit('client:load')

socket.on('server:loadData',(data)=>{
    loadDB(data)
})