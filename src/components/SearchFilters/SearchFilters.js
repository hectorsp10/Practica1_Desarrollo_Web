import react from "react"

function SearchFilters() {
    return (
        <div className="searchfilters-container">
            <div className="searchfilters-keywords">
                <p className="searchfilters-title">Filtros</p>
                <div className="searchfilters-filter-buttons">
                    <button className="searchfilters-filter-button">1</button>
                    <button className="searchfilters-filter-button">2</button>
                    <button className="searchfilters-filter-button">3</button>
                </div>
            </div>
        </div>
    );
}

export default SearchFilters;