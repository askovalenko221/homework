const foo = 'Hello '
const user = {
    name: 'Aleksander',
    age: 36,
    isAdmin: true
}

console.log(foo + user.name)

///////////////////
const users = [
    {
        name: 'Pavel',
        age: 21,
        massa: '54 kg',
        isAdmin: true
    },
    {
        name: 'Anna',
        age: 34,
        massa: '56 kg',
        isAdmin: true
    },
    {
        name: 'Olga',
        age: 28,
        massa: '64 kg',
        isAdmin: true
    },
    {
        name: 'Denis',
        age: 29,
        massa: '70 kg',
        isAdmin: true
    },
    {
        name: 'Egor',
        age: 36,
        massa: '67 kg',
        isAdmin: false
    },
]

let countUsers = 0
for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin == true) 
        countUsers +=1
    
}
console.log(countUsers)


///////////////////
