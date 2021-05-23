import BookCard from "../BookCard";
import Section from "../Section";
import { items as books } from "../../fakeGoogleBooks.json";

function BookList() {
    return (
        <Section title="Results">
            {books.map(book => <BookCard key={book.id} book={book} />)}

        </Section>

    );
}

export default BookList;