import React from "react";

const DetailSlider = () => {
    return (
        <>
            <label htmlFor="detailRange" className="form-label">Detail Level</label>
            <input type="range" className="form-range" min="0" max="5" id="detailRange"/>
        </>
    )
};

export default DetailSlider;
