import { BookPreview } from "./books-preview.jsx";

export function BookList({ books, onSelectBook }) {

    return <ul className="book-list">
        {
            books.map(book => <li key={book.id}>
                <BookPreview book={book} />
                <button onClick={() => onSelectBook(book.id)}>Select</button>
            </li>)
        }
    </ul>
}