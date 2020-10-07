import React, {useState} from "react";

const DataObjects = ({ allDataObjects, removeElements, addElements }) => {

    const [showDataObjects, setshowDataObjects] = useState(true);


    const hideDataObj = () => {
        removeElements(allDataObjects);
    };

    const showDataObj = () => {
        addElements(allDataObjects);
    };

    return (
        <>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={showDataObjects} onChange={(e)=> {
                    if(e.target.checked) {
                        showDataObj();
                    } else {
                        hideDataObj();
                    }
                    setshowDataObjects(e.target.checked);
                }}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Data Objects</label>
            </div>
        </>
    );
};

export default DataObjects;
