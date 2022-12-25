const { useState, useEffect } = React
import { bookService } from '../services/book.service.js';
import { BookList } from '../cmps/books-list.jsx';
import { BookFilter } from '../cmps/book.filter.jsx';


export function BookIndex() {
    const [books, setBooks] = useState([])
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())


    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        console.log('load books..')
        bookService.query(filterBy).then(booksToDisplay => setBooks(booksToDisplay))
    }

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
    }

    return <section className="home">
        <h1>Book Index</h1>
        <BookList books={books} />
        <BookFilter onSetFilter={onSetFilter} />
    </section>
}