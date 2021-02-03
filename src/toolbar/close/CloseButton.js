import React from "react";
import "./CloseButton.scss";

const CloseButton = ({ setFileData }) => {
    return (
        <button
            type="button"
            className="btn-close bdv-close-btn"
            onClick={() => setFileData(null)}
        />
    );
};

export default CloseButton;
