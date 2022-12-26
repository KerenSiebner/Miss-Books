const { useState, useEffect } = React
import { bookService } from '../services/book.service.js';
import { BookList } from '../cmps/books-list.jsx';
import { BookFilter } from '../cmps/book.filter.jsx';
import { BookDetails } from './book-details.jsx'


export function BookIndex() {
    const [books, setBooks] = useState([])
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [selectedBook, setSelectedBook] = useState(null)


    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        console.log('load books..')
        bookService.query(filterBy).then(booksToUpdate => {
            setBooks(booksToUpdate)})
    }

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
    }

    function onSelectBook(bookId){
        bookService.get(bookId).then((book)=>{
           setSelectedBook(book) 
        })
    }
    //TODO add loading msg
    return <section className="home">
        <BookFilter onSetFilter={onSetFilter} />
        {!selectedBook && <BookList books={books} onSelectBook={onSelectBook} />}
        {selectedBook && <BookDetails
            book={selectedBook}
            onGoBack={() => setSelectedBook(null)}
        />}
    </section>
}