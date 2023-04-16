import React, { useState } from "react";

const CourseSearch = ({ getSearchResults }) => {

    const [query, setQuery] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`/api/courses/search?query=${query}`)
        const data = await response.json();

        getSearchResults(data);
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input type="text" className="search-input" placeholder="Search Courses...." value={query} onChange={
                (e) => setQuery(e.target.value)
            } />
            <button className="search-button" type="submit">
                Search
            </button>
        </form>
    );
};

export default CourseSearch;
