import BookList from "../BookList";
import Hero from "../Hero";
import SearchForm from "../SearchForm";
import Wrapper from "../Wrapper";

function SearchPage() {
    return (
        <Wrapper>
            <Hero />
            <SearchForm />
            <BookList />
        </Wrapper>
    );
}



export default SearchPage;