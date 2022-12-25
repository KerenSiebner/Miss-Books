import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
_createBooks()

export const bookService = {
    query,
    get,
    // remove,
    // save,
    getEmptyBook,
    getDefaultFilter,
}

// function query(filterBy = getDefaultFilter()) {
function query(filterBy = getDefaultFilter()) {
    console.log('query')
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (filterBy.name) {
                const regex = new RegExp(filterBy.name, 'i')
                books = books.filter(book => regex.test(book.vendor))
            }
            // if (filterBy.minSpeed) {
            //     books = books.filter(book => book.price >= filterBy.price)
            // }
            return books
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function getDefaultFilter() {
    return { name: '', price: '' }
}

function getEmptyBook(title = '', description = '', thumbnail = '', listPrice = {}) {
    return {
        id: '',
        title,
        description,
        thumbnail,
        listPrice
    }
}

function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    console.log('books', books)
    if (!books || !books.length) {
        books = []
        books.push(_createBook('Harry Potter',
            'placerat nisi sodales suscipit tellus',
            'assets/img/20.jpg',
            {
                amount: 109,
                currencyCode: "EUR",
                isOnSale: false
            }))
        books.push(_createBook('Giving Tree',
            'placerat nisi sodales suscipit tellus',
            'assets/img/giving-tree.jpg',
            {
                amount: 67,
                currencyCode: "$",
                isOnSale: true
            }))
        books.push(_createBook('Good Night Moon',
            'placerat nisi sodales suscipit tellus',
            'assets/img/good-night.jpeg',
            {
                amount: 87,
                currencyCode: "$",
                isOnSale: true
            }))

        console.log('books', books)
        utilService.saveToStorage(BOOK_KEY, books)
    }

}
function _createBook(title, description, thumbnail, listPrice) {
    const book = getEmptyBook(title, description, thumbnail, listPrice)
    book.id = utilService.makeId()
    return book
}

// DATA MODEL
// { 
//     "id": "OXeMG8wNskc", 
//     "title": "metus hendrerit", 
//     "description": "placerat nisi sodales suscipit tellus", 
//     "thumbnail": "http://ca.org/books-photos/20.jpg", 
//     "listPrice": {  
//        "amount": 109, 
//        "currencyCode": "EUR", 
//        "isOnSale": false 
//     } 
//   }