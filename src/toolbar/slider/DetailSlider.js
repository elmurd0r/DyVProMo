import React from "react";
import "./DetailSlider.scss";

const DetailSlider = ({ detailLevel, changeDetailLevel }) => {

    const setBubble = () => {
        const val = detailLevel;
        const min = 0;
        const max = 3;
        const newVal = Number(((val - min) * 100) / (max - min));
        return `calc(${newVal}% + (${16 - newVal * 0.31}px))`;
    }
    let left = setBubble();

    return (
        <div className="bdv-toolbar-ctrl bdv-toolbar-slider px-2 w-25">
            <label htmlFor="detailRange" className="form-label m-0 mt-1">
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
            <div className="bdv-range-value" style={{left: left, display:"none"}}>{detailLevel}</div>
        </div>
    );
};

export default DetailSlider;
