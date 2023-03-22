const main = document.getElementById('main')
const sectionDB =  document.getElementById('sectionDB')
const sectionTables =  document.getElementById('sectionTables')
const db = document.querySelector('#db')
const start = document.querySelector('#start')
const tables = document.querySelector('#tables')
const showDB = document.querySelector('#showDB')
const tableMain = document.getElementById('tableMain')
const addNewDB = document.getElementById('addNewDB')
const tableDB = document.getElementById('tableDB')
const addButtonDB = document.querySelector('#addButtonDB')
const closeAdd = document.querySelector('#closeAdd')
const newDB = document.querySelector('#newDB')


db.addEventListener('click',()=>{
    main.style.display = 'none'
    sectionDB.style.display = 'flex'
    sectionTables.style.display = 'none'  
})

start.addEventListener('click',()=>{
    main.style.display = 'flex'
    sectionDB.style.display = 'none'
    sectionTables.style.display = 'none'  
})

tables.addEventListener('click',()=>{
    main.style.display = 'none'
    sectionDB.style.display = 'none'  
    sectionTables.style.display = 'flex'  
})


addButtonDB.addEventListener('click',()=>{
    showDB.style.display = 'none'
    addTableDB.style.display = 'flex'
})

closeAdd.addEventListener('click',()=>{
    showDB.style.display = 'flex'
    addTableDB.style.display = 'none'
})

addNewDB.addEventListener('click',()=>{
    addDB(newDB.value)
    newDB.value = ''
})