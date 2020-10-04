import React from 'react';

const DataStore =  ({ allDataStores, removeElements, addElements}) => {


    const hideDatStore = () => {
        removeElements(allDataStores);
    };

    const showDataStore = () => {
        addElements(allDataStores);
    };

    return (
        <>
            <button className="btn-primary btn" onClick={()=>hideDatStore()} >Hide Data Store</button>
            <button className="btn-primary btn" onClick={()=>showDataStore()} >Show Data Store</button>
        </>
    );
};

export default DataStore;
