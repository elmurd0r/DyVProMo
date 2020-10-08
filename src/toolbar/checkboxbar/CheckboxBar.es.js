import React from "react";
import ToggleSwitch from "./ToggleSwitch.es";

const CheckboxBar = ({
    showAnnotations,
    showDataObjects,
    showDataStores,
    showMessageFlows,
    changeAnnotations,
    changeDataObjects,
    changeDataStores,
    changeMessageFlow,
}) => {
    return (
        <div className="bdv-checkbox-bar bdv-toolbar-ctrl p-2">
            <ToggleSwitch
                showIt={showAnnotations}
                showShapeOrCon={changeAnnotations}
                label="Annotation"
            />
            <ToggleSwitch
                showIt={showDataObjects}
                showShapeOrCon={changeDataObjects}
                label="Data Objects"
            />
            <ToggleSwitch
                showIt={showDataStores}
                showShapeOrCon={changeDataStores}
                label="Data Stores"
            />
            <ToggleSwitch
                showIt={showMessageFlows}
                showShapeOrCon={changeMessageFlow}
                label="Message Flows"
            />
        </div>
    );
};

export default CheckboxBar;
