const friend = {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    location: {
        city: 'Toronto',
        country: 'Canada',
        address: '100 Main St.'
    }
}
console.log(friend);
console.log(friend.name);
console.log(friend['name']);

console.log(friend.location.country);
console.log(friend.location['country']);

document.querySelector('.container').textContent = (friend.location['country']);