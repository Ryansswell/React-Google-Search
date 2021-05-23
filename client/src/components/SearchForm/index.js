import Section from "../Section";

function SearchForm() {
    return (

        <Section title="Book Search">.
            <form className="d-flex flex-column">
                <div className="form-group">
                    <label htmlFor="search">Book</label>
                    <input type="text" className="form-control" id="search" placeholder="Enter Book" />
                </div>
                <button className="btn btn-primary ml-auto px-5">Search</button>
            </form>
        </Section>

    );
}




export default SearchForm;