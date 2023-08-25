const products  = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 65000},
    {id: 3, name: 'hp', price: 65000},
    {id: 4, name: 'mac', price: 65000},
]

// map

const names = products.map(product => product.name)
// console.log(names)
const price = products.map(p => p.price)
console.log(price)

// forEach
products.forEach(p => console.log(p.id))

// filter
const expensive = products.filter(p => p.price> 50000)
// console.log(expensive)

const affordable = products.find(p => p.price < 70000)
console.log(affordable)