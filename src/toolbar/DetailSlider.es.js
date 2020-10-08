import React from "react";

const DetailSlider = ({ detailLevel, changeDetailLevel }) => {
    return (
        <div className="bdv-toolbar-ctrl bdv-toolbar-slider pl-2 pr-2 w-25">
            <label htmlFor="detailRange" className="form-label m-0">
                Detail Level
            </label>
            <input
                type="range"
                className="form-range"
                min="0"
                max="3"
                id="detailRange"
                value={detailLevel}
                onChange={(e) => {
                    changeDetailLevel(e.target.value);
                }}
            />
        </div>
    );
};

export default DetailSlider;
