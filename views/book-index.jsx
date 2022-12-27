const { Link } = ReactRouterDOM
const { useState, useEffect } = React

import { bookService } from '../services/book.service.js';
import { BookList } from '../cmps/books-list.jsx';
import { BookFilter } from '../cmps/book.filter.jsx';
// import { BookDetails } from 'views/book-details.jsx';
import { eventBusService, showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js';

export function BookIndex() {
    const [isLoading, setIsLoading] = useState(false)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [books, setBooks] = useState([])
    // const [selectedBook, setSelectedBook] = useState(null)


    useEffect(() => {
        // setIsLoading(true)
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy).then(books => {
            setBooks(books)
            // setIsLoading(false)
        })
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            const updatedBooks = books.filter(book => book.id !== bookId)
            setBooks(updatedBooks)
            // eventBusService.emit('show-user-msg', {txt: 'CarRemoved', type: 'success'})
            showSuccessMsg('Book removed')
        })
            .catch((err) => {
                console.log('Had issues removing', err)
                showErrorMsg('Could not remove book')
            })
    }


    //TODO add loading msg
    return <section className="home">
        <div className="full main-layout">
            <BookFilter onSetFilter={onSetFilter} />
            <Link to="/book/edit">Add Book</Link>
            <BookList books={books} onRemoveBook={onRemoveBook} />
        </div>
    </section>
}