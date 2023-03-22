
const cardDB = (data)=>{
    const div = document.createElement('div')
    div.className = 'cardDB'
    div.innerHTML =`
        <p>${data}</p>
        <div>
            <button data-id=${data} id='delete'>Delete</button>
        </div>
    `
    const Delete = div.querySelector('#delete')

    Delete.addEventListener('click',()=>{
        deleteDB(Delete.dataset.id);
    })

    return div
}  


const cardDBTable = (data)=>{
    const div = document.createElement('div')
    div.className = 'cardTable'
    div.innerHTML =`
        <a href="#" data-id=${data} id='nameDB'>${data}</a>

    `

    const nameDB = div.querySelector('#nameDB')

    nameDB.addEventListener('click',()=>{
        tableMain.style.display = 'none'
        tableDB.style.display = 'flex'
        showTables(nameDB.dataset.id);
    })
    
    return div
}  


const cardTable = (data)=>{
    const div = document.createElement('div')
    div.className = 'cardTable'
    div.innerHTML =`
        <a href="#" data-id=${data} id='nameDB'>${data}</a>

    `

    const nameDB = div.querySelector('#nameDB')

    nameDB.addEventListener('click',()=>{
        console.log(nameDB.dataset.id);
    })
    
    return div
}   



const loadDB = data =>{
    showDB.innerHTML = ''
    data.map((d) =>(
        showDB.append(cardDB(d.Database))
    ))
}


const loadDBTable = data =>{
    tableMain.innerHTML = ''
    data.map((d) =>(
        tableMain.append(cardDBTable(d.Database))
    ))
}

const loadTables = data =>{
    tableDB.innerHTML = ''
    data.map((d) =>(
        tableDB.append(cardTable(d))
    ))
}