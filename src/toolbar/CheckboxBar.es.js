import React from "react";
import Annotation from "../annotation/Annotation.es";
import DataObjects from "../dataobjects/DataObjects.es";
import DataStore from "../datastores/DataStore.es";

const CheckboxBar = ({
    addElements,
    removeElements,
    allAnnotations,
    allDataObjects,
    allDataStores,
}) => {
    return (
        <div className="bdv-checkbox-bar bdv-toolbar-ctrl p-2">
            <Annotation
                allAnnotations={allAnnotations}
                removeElements={removeElements}
                addElements={addElements}
            />
            <DataObjects
                allDataObjects={allDataObjects}
                removeElements={removeElements}
                addElements={addElements}
            />
            <DataStore
                allDataStores={allDataStores}
                removeElements={removeElements}
                addElements={addElements}
            />
        </div>
    );
};

export default CheckboxBar;
