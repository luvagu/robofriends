import React from 'react';

const Scroll = (props) => {
    console.log('Scroll');
    return (
        <div style={{ overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;