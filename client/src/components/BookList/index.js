import BookCard from "../BookCard";
import Section from "../Section";
import { items as books } from "../../fakeGoogleBooks.json";

function BookList() {
    return (
        <Section title="Results">
            {books.map(book => <BookCard key={book.id} book={book} />)}
            <BookCard book={books[0]} />
            <BookCard book={books[1]} />
            <BookCard book={books[2]} />
        </Section>

    );
}

export default BookList;