import axios from 'axios';
import { useState } from "react";
import { searchForBooks } from "../BookList";
import BookList from "../BookList";
import Hero from "../Hero";
import SearchForm from "../SearchForm";
import Wrapper from "../Wrapper";


function SearchPage() {
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);
    const [booksLoading, setBooksLoading] = useState(false);


    const handleSearchFormSubmit = async (e) => {
        try {
            e.preventDefault();
            const trimmedSearch = search.trim();
            if (!trimmedSearch || booksLoading) return;
            setBooksLoading(true);
            const books = await searchForBooks(trimmedSearch);
            setBooks(books);
            setBooksLoading(false);
        } catch (error) {
            setBooksLoading(false);
            console.error(error);
        }
    };
    return (
        <Wrapper>
            <Hero />
            <SearchForm
                search={search}
                onSearchChange={(e) => setSearch(e.target.value)}
                onSubmit={handleSearchFormSubmit}
                booksLoading={booksLoading}
            />
            <BookList
                books={books}
            />
        </Wrapper>
    );
}

export default SearchPage;