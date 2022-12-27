//hooks
const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import { bookService } from "../services/book.service.js"
import { ReviewList } from "../cmps/review-list.jsx"
import { AddReview } from "../cmps/add-review.jsx"
import { LongTxt } from "../cmps/long-txt.jsx"

export function BookDetails() {
    // console.log('book', book)
    // const [currBook, setCurrBook] = useState(null)
    const [book, setBook] = useState(null)
    const [nextBookId, setNextBookId] = useState(null)
    const { bookId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadBook()
    }, [bookId])

    function loadBook() {
        bookService.get(bookId)
            .then((book) => {
                setBook(book)
                bookService.getNextBookId(bookId)
                .then(setNextBookId)
            })
            .catch((err) => {
                console.log('Had issues in book details', err)
                navigate('/book')
            })
    }

    function onGoBack() {
        navigate(-1)
    }

    function onSaveReview(reviewToAdd) {
        bookService.saveReview(book.id, reviewToAdd)
            .then((review) => {
                const reviews = [review, ...book.reviews]
                setBook({ ...book, reviews })
            })
            .catch((err) => {
                console.log('err:', err);

            })
    }

    function onRemoveReview(reviewId) {
        bookService.removeReview(book.id, reviewId).then(() => {
            const filteredReviews = book.reviews.filter((review) => review.id !== reviewId)
            setBook({ ...book, reviews: filteredReviews })
        })
    }



    if (!book) return <div>Loading...</div>
    return <section className="book-details">
        <h1>Book title : {book.title}</h1>
        <h5>Price: {book.listPrice.amount}</h5>
        <img src={book.thumbnail} />
        <LongTxt txt={book.description} length={100} />
        <Link to="/book">Back</Link>
        <AddReview onSaveReview={onSaveReview} />
        <ReviewList book={book} onRemoveReview={onRemoveReview} />
        <Link to={`/book/${nextBookId}`}> <button>Next Book</button> </Link>
    </section>
}






{/* <Link to={`/book/edit/${book.id}`}>Edit book </Link> */ }
{/* <button onClick={onGoBack}>Go Back</button> */ }
{/* <button className="back-btn" onClick={onGoBack}>Go back</button> */ }

// function getPageCount(pageCount) {
//     if (pageCount >= 500) return 'Serious reading'
//     else if (pageCount >= 200) return 'Descent reading'
//     else if (pageCount < 100) return 'Light reading'
// }

// function getPublishedDate(year) {
//     const yearNow = new Date().getFullYear()
//     const diff = yearNow - year
//     if (diff >= 10) return 'Vintage'
//     else if (diff <= 1) return 'New'
// }


