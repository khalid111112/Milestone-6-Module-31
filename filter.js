// filter selects elements based on a condition and returns an arraay wuth the elements 

const numbers = [1, 5, 6, 4, 15];
const players = [75, 65, 67, 12, 55, 59]
// const selected = playres.filter ( p => p > 70);
// const selected = playres.filter ( p => p > 80);
// const selected = playres.filter ( p => p > 50);
const selected = players.filter(p=> p % 2=== 1)
console.log(selected)

const friends = ['Tom', 'john', 'Micheal', 'oliver'];
const oddFriends = friends.filter(friend => friend.length > 4)
console.log(oddFriends)