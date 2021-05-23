import BookList from "../BookList";
import Hero from "../Hero";
import SearchForm from "../SearchForm";


function SearchPage() {
    return (
        <>
            <Hero />
            <SearchForm />
            <BookList />
        </>
    );
}

export default SearchPage;