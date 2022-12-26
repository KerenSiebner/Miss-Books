
export function BookPreview({ book }) {
    
    const priceNote=setPriceNote()

    function setPriceNote() {
        const price = book.listPrice.amount
        if (price > 150) return 'expensive'
        else if (price < 20) return 'cheap'
        else return ''
    }

    // TODO: price logic with change of symbol left or right
    
    return <article className="book-preview">
        {book.listPrice.isOnSale && <h5 className="on-sale">ON SALE!</h5>}
        <h4>{book.title}</h4>
        <h5>Description: {book.description}</h5>
        <h6 className={priceNote}>Price: {book.listPrice.amount+' ' +book.listPrice.currencyCode} </h6>
        <img src={book.thumbnail} />
    </article>
}

