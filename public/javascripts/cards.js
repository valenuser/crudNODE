
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
        console.log(Delete.dataset.id);
    })

    return div
}   



const loadDB = data =>{
    console.log(data);
    data.map((d) =>(
        sectionDB.append(cardDB(d.Database))
    ))
}