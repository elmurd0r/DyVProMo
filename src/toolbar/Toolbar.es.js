import React, { useState } from "react";
import CloseButton from "./CloseButton.es";
import CheckboxBar from "./checkboxbar/CheckboxBar.es";
import DetailSlider from "./DetailSlider.es";
import InfoBar from "./InfoBar.es";

const Toolbar = ({
    setFileData,
    addElements,
    removeElements,
    addConnectionArray,
    removeConnectionArray,
    allAnnotations,
    allDataObjects,
    allDataStores,
    allMessageFlows,
}) => {
    const [detailLevel, setDetailLevel] = useState("2");
    const [showAnnotations, setShowAnnotations] = useState(true);
    const [showDataObjects, setshowDataObjects] = useState(true);
    const [showDataStores, setShowDataStores] = useState(true);
    const [showMessageFlows, setShowMessageFlows] = useState(true);

    const changeDetailLevel = (level) => {
        setDetailLevel(level);
        switch (level) {
            case "0":
                changeAnnotations(false);
                changeDataObjects(false);
                changeDataStores(false);
                break;
            case "1":
                changeAnnotations(false);
                changeDataObjects(true);
                changeDataStores(true);
                break;
            case "2":
                changeAnnotations(true);
                changeDataObjects(true);
                changeDataStores(true);
                break;
            case "3":
                changeAnnotations(true);
                changeDataObjects(true);
                changeDataStores(true);
                console.log("TODO: Overlay");
                //TODO: Overlay
                break;
            default:
                changeAnnotations(true);
                changeDataObjects(true);
                changeDataStores(true);
        }
    };

    const changeAnnotations = (showIt) => {
        changeShape(
            allAnnotations,
            showAnnotations,
            setShowAnnotations,
            showIt
        );
    };
    const changeDataObjects = (showIt) => {
        changeShape(
            allDataObjects,
            showDataObjects,
            setshowDataObjects,
            showIt
        );
    };
    const changeDataStores = (showIt) => {
        changeShape(allDataStores, showDataStores, setShowDataStores, showIt);
    };

    const changeShape = (
        shapeArray,
        showShapeArray,
        setShowShapeArray,
        showIt
    ) => {
        if (showShapeArray === showIt) {
            return;
        }
        if (showIt) {
            addElements(shapeArray);
        } else {
            removeElements(shapeArray);
        }
        setShowShapeArray(showIt);
    };

    const changeMessageFlow = (showIt) => {
        changeConn(
            allMessageFlows,
            showMessageFlows,
            setShowMessageFlows,
            showIt
        );
    };

    const changeConn = (connArray, showConnArray, setShowConnArray, showIt) => {
        if (showConnArray === showIt) {
            return;
        }
        if (showIt) {
            addConnectionArray(connArray);
        } else {
            removeConnectionArray(connArray);
        }
        setShowConnArray(showIt);
    };

    return (
        <>
            <CheckboxBar
                showAnnotations={showAnnotations}
                showDataObjects={showDataObjects}
                showDataStores={showDataStores}
                showMessageFlows={showMessageFlows}
                changeAnnotations={changeAnnotations}
                changeDataObjects={changeDataObjects}
                changeDataStores={changeDataStores}
                changeMessageFlow={changeMessageFlow}
            />
            <InfoBar detailLevel={detailLevel} />
            <DetailSlider
                detailLevel={detailLevel}
                changeDetailLevel={changeDetailLevel}
            />
            <CloseButton setFileData={setFileData} />
        </>
    );
};

export default Toolbar;
