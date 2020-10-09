import React from "react";
import ToggleSwitch from "./ToggleSwitch.es";

const CheckboxBar = ({
    showAnnotations,
    showDataObjects,
    showDataStores,
    showMessageFlows,
    showOverlay,
    changeAnnotations,
    changeDataObjects,
    changeDataStores,
    changeMessageFlow,
    changeOverlay
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
            <ToggleSwitch
                showIt={showOverlay}
                showShapeOrCon={changeOverlay}
                label={"Explanation"}
            />
        </div>
    );
};

export default CheckboxBar;
