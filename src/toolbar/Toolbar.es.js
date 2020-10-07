import React from 'react';
import CloseButton from "./CloseButton.es";
import CheckboxBar from "./CheckboxBar.es";

const Toolbar = ({setFileData, addElements, removeElements, allAnnotations, allDataObjects, allDataStores}) => {
    return (
        <>
            <CheckboxBar addElements={addElements} removeElements={removeElements} allAnnotations={allAnnotations} allDataObjects={allDataObjects} allDataStores={allDataStores}/>
            <CloseButton setFileData={setFileData}/>
        </>
    );
};

export default Toolbar;
