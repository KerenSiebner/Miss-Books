const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { bookService } from "../services/book.service.js"
import { eventBusService, showSuccessMsg } from "../services/event-bus.service.js"

export function BookEdit(){
    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    const navigate = useNavigate()
    const { bookId } = useParams()

    useEffect(() => {
        if (!bookId) return
        loadBook()
    }, [])

    function loadBook() {
        bookService.get(bookId)
            .then((book) => setBookToEdit(book))
            .catch((err) => {
                console.log('Had issues in book details', err)
                navigate('/book')
            })
    }

    function handleChange({ target }) {
        console.log('target', target)
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value
        setBookToEdit((prevBook) => ({ ...prevBook, [field]: value }))
        console.log('book', book)
    }

    function onSaveBook(ev) {
        ev.preventDefault()
        bookService.save(bookToEdit).then((book) => {
            console.log('book saved', book);
            showSuccessMsg('Book saved!')
            navigate('/book')
        })
    }

    return <section className="book-edit">
        <h2>{bookToEdit.id ? 'Edit this book' : 'Add a new book'}</h2>

        <form onSubmit={onSaveBook}>
            <label htmlFor="name">Title : </label>
            <input type="text"
                name="name"
                id="name"
                placeholder="Enter book title..."
                value={bookToEdit.name}
                onChange={handleChange}
            />
            <label htmlFor="Price">Price : </label>
            <input type="number"
                name="Price"
                id="Price"
                placeholder="Enter price"
                value={bookToEdit.listPrice.amount}
                onChange={handleChange}
            />

            <div>
                <button>{bookToEdit.id ? 'Save' : 'Add'}</button>
                <Link to="/book">Cancel</Link>
            </div>
        </form>
    </section>
}