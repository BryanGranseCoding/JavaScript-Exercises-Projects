const json = {
    "books": [
        {
            "title": "Learn to Code",
            "author": "John Smith",
            "isbn": "324-23243"
        },
        {
            "title": "The Adventure JSON",
            "author": "Jason Jones",
            "isbn": "3324-2-444"
        },
        {
            "title": "New Objects",
            "author": "Jane Doe",
            "isbn": "2343-234-2433"
        }

    ]
}

/* json.books.forEach(val =>{
    console.log(val);
}) */

/* for (const titles of json.books) {
    console.log(titles.title);
} */

const listOfBooks = () =>{ 

    for (let i = 0; i < json.books.length; i++){
        console.log(json.books[i].title);
    }
 }

 listOfBooks();

