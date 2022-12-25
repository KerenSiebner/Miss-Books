
export function BookPreview({ book }) {
    console.log('book.thumbnail', book.thumbnail)

    return <article className="book-preview">
        <h2>{book.title}</h2>
        <h3>Description: {book.description}</h3>
        <h4>Price: {book.listPrice.currencyCode} {book.listPrice.amount}</h4>
        {book.listPrice.isOnSale && <h4>ON SALE!</h4>}
        <img src={book.thumbnail} />
        {/* <img src="assets/img/20.jpg" alt="" /> */}
    </article>
}

