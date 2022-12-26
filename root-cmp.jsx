// const { useState } = React
const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { HomePage } from "./views/home-page.jsx"
import { AboutUs } from "./views/about-us.jsx"
import { BookIndex } from "./views/book-index.jsx"
import { AppHeader } from "./cmps/app-header.jsx"
import { BookDetails } from "./views/book-details.jsx"
import { BookEdit } from "./views/book-edit.jsx"
import { UserMsg } from "./cmps/user-msg.jsx"

export function App() {
    // const [page, setPage] = useState('book')

    return <Router>
        <section className="main-layout app">
            <AppHeader />

            <main className="full main-layout">
                <Routes>
                    <Route element={<HomePage/>} path="/" />
                    <Route element={<AboutUs/>} path="/about" />
                    <Route element={<BookIndex/>} path="/book" />
                    <Route element={<BookDetails/>} path="/book/:bookId" />
                    <Route element={<BookEdit/>} path="/book/edit" />
                </Routes>
            </main>
            <UserMsg/>
        </section>
    </Router>
}