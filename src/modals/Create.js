import React from 'react';
const Create = ({modal}) => {
    // Example handleKeyPress function
    const handleSearch = (event) => {
        event.preventDefault();
        // Implement search functionality
        console.log('Searching...');
    };

    return (
        <div className="modal_container open">
            <div className="page-content modal_wrapper modal_content" style={{ transform: `scale(${modal})` }}>
                <div className="custom_loader custom_loader_1 hidden">
                    <div className="preloader-inner">
                        <span className="dot"></span>
                        <div className="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className="circle_io close_btn">
                    <i className="fa fa-times"></i>
                </div>

                <div className="most-popular" style={{ display: 'block' }}>
                    <div className="header-text">
                        <h6>Enter group link</h6>
                    </div>

                    <div className="header-area" style={{ position: 'unset' }}>
                        <div className="main-nav">
                            <div className="search-input">
                                <form id="search" action="#">
                                    <input
                                        type="text"
                                        className="link_input"
                                        placeholder="https://chat.whatsapp.com/EnkKB3zNwoXXXXXXX"
                                        id="searchText"
                                        name="links"
                                    // onChange={handleSearch}
                                    />
                                    <i className="fa fa-link"></i>
                                </form>
                                <small className="text-danger position-relative top-20 show_error"></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;
