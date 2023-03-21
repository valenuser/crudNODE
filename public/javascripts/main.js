const main = document.getElementById('main')
const sectionDB =  document.getElementById('sectionDB')
const db = document.querySelector('#db')
const start = document.querySelector('#start')
const showDB = document.querySelector('#showDB')
const addTableDB = document.getElementById('addTableDB')
const addButtonDB = document.querySelector('#addButtonDB')
const closeAdd = document.querySelector('#closeAdd')
const newDB = document.querySelector('#newDB')
const addNewDB = document.getElementById('addNewDB')

db.addEventListener('click',()=>{
    main.style.display = 'none'
    sectionDB.style.display = 'flex'
})

start.addEventListener('click',()=>{
    main.style.display = 'flex'
    sectionDB.style.display = 'none'  
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