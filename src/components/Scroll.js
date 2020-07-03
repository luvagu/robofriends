import React from 'react';

const Scroll = (props) => {
    // console.log('Scroll');
    return (
        // <div style={{ overflowY: 'scroll', border: '4px solid black', height: '800px' }}>
        <div className="overflow-y-scroll ba bw3-ns b--black vh-75">
            {props.children}
        </div>
    );
};

export default Scroll;