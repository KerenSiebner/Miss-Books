
export function BookPreview({ book }) {
    console.log('book.thumbnail', book.thumbnail)

    // function isExpensive() {
    //     const price = book.listPrice.amount
    //     if (price > 150) return 'expensive'
    //     else if (price < 20) return 'cheap'
    // }

    const isExpensive = (book.listPrice.amount>150) ? true : false
    const isCheap = (book.listPrice.amount<20) ? true : false
    return <article className="book-preview">
        {book.listPrice.isOnSale && <h5 className="on-sale">ON SALE!</h5>}
        <h4>{book.title}</h4>
        <h5>Description: {book.description}</h5>
        <h6 className={isExpensive && 'expensive' || isCheap && 'cheap'}>Price: {book.listPrice.currencyCode} {book.listPrice.amount}</h6>
        <img src={book.thumbnail} />
    </article>
}

