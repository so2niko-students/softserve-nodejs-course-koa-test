const authors = [
    "F. Scott Fitzgerald",
    "Harper Lee",
    "J.R.R. Tolkien",
    "J.K. Rowling",
    "George Orwell",
    "Jane Austen",
    "J.D. Salinger",
    "Dan Brown",
    "Aldous Huxley",
    "C.S. Lewis",
    "Stephen King",
    "Paulo Coelho",
    "Herman Melville",
    "Cormac McCarthy",
    "Arthur Conan Doyle",
    "Homer",
    "Robert Frost",
    "Stieg Larsson",
    "Ernest Hemingway"
].sort();

const genres = [
    "Fiction",
    "Fantasy",
    "Dystopian",
    "Romance",
    "Coming of Age",
    "Mystery",
    "Horror",
    "Adventure",
    "Post-Apocalyptic",
    "Epic Poetry",
    "Poetry"
].sort();

const filterBooks = {
    '/book?filter=price&type=lte&value=7' : [
        {
            "id": 18,
            "title": "The Road Not Taken",
            "author": "Robert Frost",
            "genre": "Poetry",
            "price": 6.99,
            "publicationYear": 1916
        }
    ],
    'book?filter=price&type=lte&value=3' : [],
    '/book?filter=price&type=gte&value=10': [
        {
            "id": 1,
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "genre": "Fiction",
            "price": 12.99,
            "publicationYear": 1925
        },
        {
            "id": 2,
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "genre": "Fiction",
            "price": 10.49,
            "publicationYear": 1960
        },
        {
            "id": 3,
            "title": "The Hobbit",
            "author": "J.R.R. Tolkien",
            "genre": "Fantasy",
            "price": 14.99,
            "publicationYear": 1937
        },
        {
            "id": 5,
            "title": "1984",
            "author": "George Orwell",
            "genre": "Dystopian",
            "price": 11.99,
            "publicationYear": 1949
        },
        {
            "id": 8,
            "title": "The Da Vinci Code",
            "author": "Dan Brown",
            "genre": "Mystery",
            "price": 13.49,
            "publicationYear": 2003
        },
        {
            "id": 9,
            "title": "The Lord of the Rings",
            "author": "J.R.R. Tolkien",
            "genre": "Fantasy",
            "price": 19.99,
            "publicationYear": 1954
        },
        {
            "id": 10,
            "title": "Brave New World",
            "author": "Aldous Huxley",
            "genre": "Dystopian",
            "price": 10.99,
            "publicationYear": 1932
        },
        {
            "id": 11,
            "title": "The Chronicles of Narnia",
            "author": "C.S. Lewis",
            "genre": "Fantasy",
            "price": 15.99,
            "publicationYear": 1950
        },
        {
            "id": 12,
            "title": "The Shining",
            "author": "Stephen King",
            "genre": "Horror",
            "price": 12.49,
            "publicationYear": 1977
        },
        {
            "id": 14,
            "title": "Moby-Dick",
            "author": "Herman Melville",
            "genre": "Adventure",
            "price": 11.99,
            "publicationYear": 1851
        },
        {
            "id": 15,
            "title": "The Road",
            "author": "Cormac McCarthy",
            "genre": "Post-Apocalyptic",
            "price": 14.49,
            "publicationYear": 2006
        },
        {
            "id": 17,
            "title": "The Odyssey",
            "author": "Homer",
            "genre": "Epic Poetry",
            "price": 10.99,
            "publicationYear": -800
        },
        {
            "id": 19,
            "title": "The Girl with the Dragon Tattoo",
            "author": "Stieg Larsson",
            "genre": "Mystery",
            "price": 11.99,
            "publicationYear": 2005
        }
    ],
    '/book?filter=year&type=gte&value=2005': [
        {
            "id": 15,
            "title": "The Road",
            "author": "Cormac McCarthy",
            "genre": "Post-Apocalyptic",
            "price": 14.49,
            "publicationYear": 2006
        },
        {
            "id": 19,
            "title": "The Girl with the Dragon Tattoo",
            "author": "Stieg Larsson",
            "genre": "Mystery",
            "price": 11.99,
            "publicationYear": 2005
        }
    ],
    '/book?filter=year&type=lte&value=1900': [
        {
            "id": 6,
            "title": "Pride and Prejudice",
            "author": "Jane Austen",
            "genre": "Romance",
            "price": 8.99,
            "publicationYear": 1813
        },
        {
            "id": 14,
            "title": "Moby-Dick",
            "author": "Herman Melville",
            "genre": "Adventure",
            "price": 11.99,
            "publicationYear": 1851
        },
        {
            "id": 16,
            "title": "Sherlock Holmes: A Study in Scarlet",
            "author": "Arthur Conan Doyle",
            "genre": "Mystery",
            "price": 8.99,
            "publicationYear": 1887
        },
        {
            "id": 17,
            "title": "The Odyssey",
            "author": "Homer",
            "genre": "Epic Poetry",
            "price": 10.99,
            "publicationYear": -800
        }
    ]
}



module.exports = { authors, genres, filterBooks };