import BookCard from "../BookCard";
import Section from "../Section";


function BookList({ books }) {
    return (
        <Section title="Results">
            {books.length > 0 ? (
                books.map((book) => <BookCard key={book.id} {...book} />)
            ) : (
                <p>No results to display. Try searching for a topic. </p>
            )
            }
        </Section>
    );
}

export default BookList;