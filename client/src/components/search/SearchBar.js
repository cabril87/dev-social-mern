import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const SearchBar = ({onChange, placeholder, value, icon}) => {

 
        
    
    return (
       

        <div className="flex justify-center p-12" >
            <div className="bg-white flex items-center rounded-full shadow-xl h-12 w-96">
                <input
                    className="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
                    type="text" placeholder={placeholder} onChange={onChange} value={value}/>
                <div className="p-4">
                    <button className="bg-color-blue text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-6 h-6 flex items-center justify-center">
                        <FontAwesomeIcon icon={icon} className="text-3xl m-2 text-color-hot-blue w-4 h-2" />
                    </button>
                </div>
            </div>
        </div>
       
    )
}


export default SearchBar
