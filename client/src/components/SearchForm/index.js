import Section from "../Section";

function SearchForm({ search, onSearchChange, onSubmit, booksLoading }) {
    return (
        <Section title="Book Search">.
            <form className="d-flex flex-column" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="search">Book</label>
                    <input type="text"
                        className="form-control"
                        id="search"
                        value={search}
                        onChange={onSearchChange}
                        placeholder="Enter Book"
                        disabled={booksLoading}
                    />
                </div>
                <button
                    className="btn btn-primary ml-auto px-5"
                    disabled={booksLoading}
                >
                    {booksLoading ? (
                        <>
                            <span className="spinner-border spinner-border-sm mr-3"
                                role="status"
                                aria-hidden="true" />
                    Loading...
                    </>
                    ) : (
                        "Submit"
                    )}


                    Search
                    </button>
            </form>
        </Section>
    );
}




export default SearchForm;