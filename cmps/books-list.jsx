const { Link } = ReactRouterDOM

import { BookPreview } from "./book-preview.jsx";

export function BookList({ books, onRemoveBook }) {

    return <ul className="book-list">
        {
            books.map(book => <li key={book.id}>
                <BookPreview book={book} />
                <div>
                    {/* <button onClick={() => onSelectBook(book.id)}>Select</button> */}
                    <Link to={`/book/${book.id}`}>Select</Link>
                    <button onClick={() => onRemoveBook(book.id)}>Remove</button>
                    {/* <Link to={`/book/${book.id}`} onClick={()=> onSelectBook(book.id)}>Select </Link> */}
                </div>
            </li>)
        }
    </ul>
}