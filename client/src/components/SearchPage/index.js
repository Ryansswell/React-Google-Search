import { useState } from "react";
import BookList from "../BookList";
import Hero from "../Hero";
import SearchForm from "../SearchForm";
import Wrapper from "../Wrapper";
import axios from 'axios';

function SearchPage() {
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);

    const handleSearchFormSubmit = async (e) => {
        try {
            e.preventDefault();
            const trimmedSearch = search.trim();
            if (!trimmedSearch) return;

            const url = `https://www.googleapis.com/books/v1/volume?q=${trimmedSearch}`;
            const res = await axios.get(url);
            setBooks(res.data.items || []);
        } catch (error) {
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
            />
            <BookList
                books={books}
            />
        </Wrapper>
    );
}

export default SearchPage;