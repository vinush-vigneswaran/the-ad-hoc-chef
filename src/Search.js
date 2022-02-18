const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <form action="/" method="get">
        <div className="search">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search recipes</span>
        </label>
        
            <input
                value={searchQuery}
                onInput={e => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search our recipes ..."
                name="s"
            />
            <button type="submit">Search</button>

        </div>
    </form>
);

export default SearchBar;