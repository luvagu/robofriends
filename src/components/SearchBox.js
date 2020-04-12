import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className='pa2'>
            <input
            className="pa3 ba b--green bg-lightest-blue"
            type="text" 
            placeholder="Search robots"
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;