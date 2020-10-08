import React from "react";

const ToggleSwitch = ({ showIt, showShapeOrCon, label }) => {
    return (
        <>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    checked={showIt}
                    onChange={(e) => {
                        showShapeOrCon(e.target.checked);
                    }}
                />
                <label
                    className={`form-check-label ${
                        !showIt && "bdv-color-grey"
                    }`}
                    htmlFor="flexSwitchCheckDefault"
                >
                    {label}
                </label>
            </div>
        </>
    );
};

export default ToggleSwitch;
