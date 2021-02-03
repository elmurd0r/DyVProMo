import React from "react";
import "./ResetButton.scss";
import { FiCrosshair } from "react-icons/fi";

const ResetButton = ({ resetViewport }) => {
    return (
        <div
            className=" bdv-reset-btn bdv-pointer"
            onClick={() => resetViewport()}
        >
           <FiCrosshair size="2em" title="reset zoom"/>
        </div>
    );
};

export default ResetButton;
