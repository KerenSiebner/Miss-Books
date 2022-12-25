const { useState } = React

import { HomePage } from "./views/home-page.jsx";
import { AboutUs } from "./views/about-us.jsx";
import { BookIndex } from "./views/book-index.jsx";

export function App() {
    const [page, setPage] = useState('home')

    return <section className="main-layout app">
        <header className="app-header full main-layout">
            <h1>Miss Books</h1>
            <nav className="app-nav">
                <a href="#" onClick={() => setPage('home')}>Home</a> | 
                <a href="#" onClick={() => setPage('about')}>About</a> | 
                <a href="#" onClick={() => setPage('book')}>Books</a>
            </nav>
        </header>

        <main>
            {page === 'home' && <HomePage />}
            {page === 'about' && <AboutUs />}
            {page === 'book' && <BookIndex />}
        </main>
    </section>
}