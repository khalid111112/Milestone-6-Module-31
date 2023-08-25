// data access
 const data = [{id: 1, name: 'abul', address: 'kochu khet'}];

 console.log(data[0].address);

 const product = {
    count: 5000,
    data:[
        {id: 1, name: 'lenovo laptop', price: 650000},
        {id: 2, name: 'macbook', price: 160000}
    ]
 }

//  second product price
console.log(product.data[1].price)


const user = {
    id: 5001,
    name: 'shoriful Raj ',
    address: {
        sterrt: {
            first: '54/1 uttor side',
            second: 'poribag re goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}




const user2 = {
    id: 5002,
    name: 'pori bibir najar',
    address: {
        city: 'chittagong',
        countru: 'Bangladesh'
    }
}

console.log(user.address.sterrt?.second)
console.log(user2.address.sterrt?.second)