"use strict";

// Sample data for books array
const books = [
    {
        title: "Book One",
        keywords: ["keyword1", "keyword2", "keyword3"],
        publisher: "Publisher One",
        authors: ["Author One", "Author Two"]
    },
    {
        title: "Book Two",
        keywords: ["keyword4", "keyword5", "keyword6"],
        publisher: "Publisher Two",
        authors: ["Author Three", "Author Four"]
    }
];

//4.1
const [mainKeyword, ...rest] = books[0].keywords;

//4.2
const { publisher: bookPublisher, ...restOfTheBook } = books[1];

//4.3
function printBookAuthorsCount(title, ...authors) {
    console.log(`The book "${title}" has ${authors.length} authors`);
}

// Example usage
printBookAuthorsCount(books[0].title, ...books[0].authors);