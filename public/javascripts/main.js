const main = document.getElementById('main')
const sectionDB =  document.getElementById('sectionDB')
const db = document.querySelector('#db')
const start = document.querySelector('#start')
const showDB = document.querySelector('#showDB')

db.addEventListener('click',()=>{
    main.style.display = 'none'
    sectionDB.style.display = 'flex'
})

start.addEventListener('click',()=>{
    main.style.display = 'flex'
    sectionDB.style.display = 'none'  
})