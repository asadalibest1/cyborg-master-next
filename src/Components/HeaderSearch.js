import React from 'react'

const HeaderSearch = () => {
    // Example: function to handle search submission
    const handleSearch = (event) => {
        event.preventDefault();
        // Implement search functionality
        console.log('Searching...');
    };
    return (
        <form id="search">
            <input
                type="text"
                placeholder="Type Something"
                id="searchText"
                name="searchKeyword"
                // onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
            />
            <i className="fa fa-search"></i>
        </form>)
}

export default HeaderSearch