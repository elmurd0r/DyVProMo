import React from "react";

const HighlightToggle = ({
    elem,
    label,
    highlightedElements,
    setHighlightedElements,
    highlightElement,
    removeHighlightElement,
}) => {
    return (
        <>
            <div className="form-check form-switch">
                <input
                    className="form-check-input bdv-pointer"
                    type="checkbox"
                    id={`highlight-${label}`}
                    checked={
                        highlightedElements.find(
                            (highElem) => highElem.id === elem.id
                        ) !== undefined
                    }
                    onChange={(e) => {
                        if (e.target.checked) {
                            highlightElement(elem);
                            setHighlightedElements([
                                ...highlightedElements,
                                elem,
                            ]);
                        } else {
                            removeHighlightElement(elem);
                            let filter = highlightedElements.filter(
                                (highElem) => highElem.id !== elem.id
                            );
                            setHighlightedElements(filter);
                        }
                    }}
                />
                <label
                    className={`form-check-label bdv-pointer ${
                        !highlightedElements.find(
                            (highElem) => highElem.id === elem.id
                        ) && "bdv-color-grey"
                    }`}
                    htmlFor={`highlight-${label}`}
                >
                    {label}
                </label>
            </div>
        </>
    );
};

export default HighlightToggle;
