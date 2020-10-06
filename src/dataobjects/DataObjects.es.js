import React from "react";

const DataObjects = ({ allDataObjects, removeElements, addElements }) => {
    const hideDataObj = () => {
        removeElements(allDataObjects);
    };

    const showDataObj = () => {
        addElements(allDataObjects);
    };

    return (
        <>
            <button className="btn-primary btn" onClick={() => hideDataObj()}>
                Hide Data Object
            </button>
            <button className="btn-primary btn" onClick={() => showDataObj()}>
                Show Data Object
            </button>
        </>
    );
};

export default DataObjects;
