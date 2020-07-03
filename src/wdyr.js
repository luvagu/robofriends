import React from 'react';

if (process.env.NODE_ENV === 'development') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render');
    whyDidYouRender(React, {
        trackAllPureComponents: true,
    });
}

// Use for react-redux with hooks 
// if (process.env.NODE_ENV === 'development') {
//     const whyDidYouRender = require('@welldone-software/why-did-you-render');
//     const ReactRedux = require('react-redux');
//     whyDidYouRender(React, {
//         trackAllPureComponents: true,
//         trackExtraHooks: [
//             [ReactRedux, 'useSelector']
//         ]
//     });
// }