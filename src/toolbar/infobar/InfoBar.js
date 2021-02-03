import React from "react";
import "./InfoBar.scss";

const InfoBar = ({ detailLevel }) => {
    return (
        <div className="bdv-info-bar bdv-font-small">
            <ul className="list-group bdv-br">
                <li
                    className={`list-group-item p-1 ${
                        detailLevel === "0" ? "active" : "disabled"
                    }`}
                    aria-current="true"
                >
                    0: No Details
                </li>
                <li
                    className={`list-group-item p-1 ${
                        detailLevel === "1" ? "active" : "disabled"
                    }`}
                >
                    1: Small Details
                </li>
                <li
                    className={`list-group-item p-1 ${
                        detailLevel === "2" ? "active" : "disabled"
                    }`}
                >
                    2: Regular View
                </li>
                <li
                    className={`list-group-item p-1 ${
                        detailLevel === "3" ? "active" : "disabled"
                    }`}
                >
                    3: Regular View + Explanation
                </li>
            </ul>
        </div>
    );
};

export default InfoBar;
