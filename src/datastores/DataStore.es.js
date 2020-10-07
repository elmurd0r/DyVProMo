import React, {useState} from "react";

const DataStore = ({ allDataStores, removeElements, addElements }) => {

    const [showDataStores, setShowDataStores] = useState(true);

    const hideDatStore = () => {
        removeElements(allDataStores);
    };

    const showDataStore = () => {
        addElements(allDataStores);
    };

    return (
        <>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={showDataStores} onChange={(e)=> {
                    if(e.target.checked) {
                        showDataStore();
                    } else {
                        hideDatStore();
                    }
                    setShowDataStores(e.target.checked);
                }}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Data Stores</label>
            </div>
        </>
    );
};

export default DataStore;
