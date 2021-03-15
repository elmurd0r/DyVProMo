import React from 'react';

const HighlightBtn = ({setShowHighlighter}) => {
    return (
        <button className="btn btn-dark bdv-highlight-btn" onClick={()=>{setShowHighlighter(true)}}>Open Highlighter</button>
    );
};

export default HighlightBtn;
