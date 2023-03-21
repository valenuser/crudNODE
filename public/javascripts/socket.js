const socket = io()

socket.emit('client:load')

socket.on('server:loadData',(data)=>{
    loadDB(data)
    loadTable(data)
})

const deleteDB = (idDB) =>{
    socket.emit('client:deleteDB',idDB)
    socket.emit('client:load')
}

const addDB = (nameDB) =>{
    socket.emit('client:addDB',nameDB)
}