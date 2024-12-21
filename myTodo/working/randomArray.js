const array = [
    {
    "name": "John Doe"
    },
    {"name": "Mark Doe"},
    {"name": "Michael Smith"},
    {"name": "Jessy Bieber"},
    {"name": "Taylor Swift"}
];

const random = Math.floor(Math.random() * array.length);

console.log(array.at(random).name);

