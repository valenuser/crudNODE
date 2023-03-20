const main = document.getElementById('main')
const sectionDB =  document.getElementById('sectionDB')
const db = document.querySelector('#db')
const start = document.querySelector('#start')

db.addEventListener('click',()=>{
    main.style.display = 'none'
    sectionDB.style.display = 'flex'
})