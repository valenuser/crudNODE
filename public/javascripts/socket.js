const socket = io()

socket.emit('client:load')

socket.on('server:loadData',(data)=>{
    loadDB(data)
    loadDBTable(data)
})

socket.on('server:showTables',(dataTables)=>{
    loadTables(dataTables)
})

const deleteDB = (idDB) =>{
    socket.emit('client:deleteDB',idDB)
    socket.emit('client:load')
}

const addDB = (nameDB) =>{
    socket.emit('client:addDB',nameDB)
}

const showTables = (nameDB) =>{
    socket.emit('client:showTables',nameDB)
}