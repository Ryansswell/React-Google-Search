function Section({ title, children }) {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <h2 className="card-title" style={{ fontSize: "1.3rem" }}>
                    {title}
                </h2>
                {children}
            </div>
        </div>
    );
}

export default Section;