import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'auto', border: '1px solid #333', maxHeight: '700px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;