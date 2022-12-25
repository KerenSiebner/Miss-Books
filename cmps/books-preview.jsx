
export function BookPreview({ book }) {
    console.log('book.thumbnail', book.thumbnail)

    return <article className="book-preview">
        {book.listPrice.isOnSale && <h5 className="on-sale">ON SALE!</h5>}
        <h4>{book.title}</h4>
        <h5>Description: {book.description}</h5>
        <h6>Price: {book.listPrice.currencyCode} {book.listPrice.amount}</h6>
        <img src={book.thumbnail} />
    </article>
}

