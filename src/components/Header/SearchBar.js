import React, {useState} from "react";

function SearchBar() {

    const [selectedOption, setSelectedOption] = useState("Todos");

    const handleSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <div>
            <form className="searchbar-form">
                <div className="input-group">
                    <button
                        className="btn btn-primary dropdown-toggle input-group-text"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {selectedOption}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>
                            <button className="dropdown-item" type="button"
                                    onClick={() => handleSelect("Todos")}>Todos
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" type="button"
                                    onClick={() => handleSelect("Ficción")}>Ficción
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" type="button"
                                    onClick={() => handleSelect("No ficción")}>No ficción
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item" type="button"
                                    onClick={() => handleSelect("Infantil")}>Infantil
                            </button>
                        </li>
                    </ul>
                    <input type="text" className="searchbar-input" placeholder="Search..."/>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;