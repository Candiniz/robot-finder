import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '600px', padding: '0 200px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;