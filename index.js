const library = []

const bookOne = {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        yearPublished: 1925,
        available: true
    }
const bookTwo = {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        yearPublished: 1960,
        available: true
    }
const bookThree = {
        title: "1984",
        author: "F. Scott Fitzgerald",
        yearPublished: 1949,
        available: false
    }
const bookFour = {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        yearPublished: 1813,
        available: true
    }
const newBook = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    yearPublished: 1951,
    available: true
}

//Update the Availability of a Book:
library.push(bookOne, bookTwo, bookThree, bookFour)
bookThree.available = true
console.log(library)

//Remove a Book from the Library:
const spliceLibary = library.splice(3,1)
console.log(spliceLibary)

//Check if a Book is in the Library:
const checkLibrary = library.includes(bookOne)
console.log(checkLibrary)

//Borrow the First Book:
bookOne.available = false
console.log(bookOne)
library.shift()
console.log(library)


//Add a New Book to the Start of the Library:
library.unshift(newBook)
console.log(library)

//Get a List of All Book Titles:
library.forEach((item) => {
    let title = item.title
    console.log(title.toString())
})

//Create a New Library Section:
const sliceArr = library.slice(1, 3)
console.log(sliceArr)