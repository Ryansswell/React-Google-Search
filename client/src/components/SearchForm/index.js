function SearchForm() {
    return (
        <div classname="card">
            <div classname="card-body">
                <h2 classname="card-title" style={{ fontSize: "1.3rem" }}>
                    Book Search
                    </h2>
                <form className="d-flex flex-column">
                    <div className="form-group">
                        <label htmlFor="search">Book</label>
                        <input type="text" className="form-control" id="search" placeholder="Enter Book" />
                    </div>
                    <button className="btn btn-primary ml-auto px-5">Search</button>
                </form>
            </div>
        </div>


    );
}



export default SearchForm;