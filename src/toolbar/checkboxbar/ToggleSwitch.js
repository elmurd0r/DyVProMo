import React from "react";

const ToggleSwitch = ({ showIt, showShapeOrCon, label }) => {
    return (
        <>
            <div className="form-check form-switch">
                <input
                    className="form-check-input bdv-pointer"
                    type="checkbox"
                    id={`flexSwitch-${label}`}
                    checked={showIt}
                    onChange={(e) => {
                        showShapeOrCon(e.target.checked);
                    }}
                />
                <label
                    className={`form-check-label bdv-pointer ${
                        !showIt && "bdv-color-grey"
                    }`}
                    htmlFor={`flexSwitch-${label}`}
                >
                    {label}
                </label>
            </div>
        </>
    );
};

export default ToggleSwitch;
