import React from 'react';

const SearchBox = ({ searchChange }) => {
    // console.log('SearchBox');
    return (
        <div className='pa2'>
            <input
                aria-label="Search robots"
                className="pa3 ba b--green bg-lightest-blue"
                type="text" 
                placeholder="Search robots"
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;