const { useState, useEffect } = React

import { bookService } from "../services/book.service.js"

export function BookFilter({onSetFilter}){

    const [filterByToEdit, setFilterByToEdit] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        // console.log('target', target)
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }
    return <section className="book-filter">
        <form onSubmit={onSubmitFilter}>
            <label htmlFor="title">Title:  </label>
            <input type="text"
                id="title"
                name="txt"
                placeholder="Filter by book title"
                value={filterByToEdit.txt}
                onChange={handleChange}
            />
            <label htmlFor="price">Price:  </label>
            <input type="number"
                id="price"
                name="price"
                placeholder="Filter by price"
                value={filterByToEdit.price}
                onChange={handleChange}
            />

            <button>Filter books!</button>
        </form>

    </section>
}