import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const SearchBar = (
//     { profile: {
//     user: { _id, name, avatar },
//     status,
//     company,
//     location,
//     skills
// } }
) => {
    return (
        <div class="p-12">
            <div class="bg-white flex items-center rounded-full shadow-xl h-12">
                <input
                    className="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
                    id="search" type="text" placeholder="Search" />
                <div class="p-4">
                    <button class="bg-color-blue text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-6 h-6 flex items-center justify-center">
                        <FontAwesomeIcon icon={faSearch} className="text-3xl m-2 text-color-hot-blue w-4 h-2" />
                    </button>
                </div>
            </div>
        </div>
    )
}

// SearchBar.propTypes = {
//     profile: PropTypes.object.isRequired,
// }

export default SearchBar
