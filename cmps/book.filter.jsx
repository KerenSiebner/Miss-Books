const { useState, useEffect } = React

import { bookService } from "./../services/book.service.js"

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
            <label htmlFor="name">Title:  </label>
            <input type="text"
                id="name"
                name="name"
                placeholder="Filter by book title"
                value={filterByToEdit.name}
                onChange={handleChange}
            />
            <label htmlFor="maxPrice">Maximun price:  </label>
            <input type="number"
                id="maxPrice"
                name="maxPrice"
                placeholder="Filter by price"
                value={filterByToEdit.maxPrice}
                onChange={handleChange}
            />

            <button>Filter books!</button>
        </form>

    </section>
}
