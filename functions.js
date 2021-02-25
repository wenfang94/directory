
const list = (clients) => 
clients.map(client => 
    `<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name}
        <strong>$ ${client.balance}</strong>
    </li>`).join('')

const order = (clients,property) => 
clients.sort((a, b) => {
    if(a[property] < b[property]){
        return -1
        } 
        else if(a[property] > b[property]){
        return 1
        } 
        else{
        return 0
        }
    })

const total = (clients) =>
clients.reduce((accum,client) =>
    { return accum += client.balance}, 0)

const info = (number) =>
clients.find(client => client.index === number)

const search = (letter) =>
clients.filter(client => 
    client.name.toLowerCase().includes(letter.toLowerCase())
    )