import { bookService } from "../services/book.service.js"
import {AddReview} from "../cmps/add-review.jsx"

const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function BookDetails() {
    // console.log('book', book)
    const [book, setBook] = useState(null)
    const params = useParams()
    console.log('params.bookId', params.bookId)
    const navigate = useNavigate()

    useEffect(() => {
        loadBook()
    }, [])

    function loadBook() {
        bookService.get(params.bookId)
            .then((book) => setBook(book))
            .catch((err) => {
                console.log('Had issues in book details', err)
                navigate('/book')
            })
    }


    return <section className="book-details">
        <h1>Book title : {book.title}</h1>
        <h5>Price: {book.listPrice.amount}</h5>
        <img src={book.thumbnail} />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptas cumque tempore, aperiam sed dolorum rem! Nemo quidem, placeat perferendis tempora aspernatur sit, explicabo veritatis corrupti perspiciatis repellat, enim quibusdam!</p>
        {/* <button onClick={onGoBack}>Go Back</button> */}
        <AddReview/>
        <Link to="/book">Back</Link>
        {/* <Link to={`/book/edit/${book.id}`}>Edit book </Link> */}
    </section>
}