// const array = [1, 2, 3, 4]

// array.push(5)
// console.log (array.length)



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



const usersName = []
users.forEach((user) => {
    usersName.push(user.name)
    
});

console.log(usersName)