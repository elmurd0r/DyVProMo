import React, { useState } from "react";
import CloseButton from "./close/CloseButton";
import CheckboxBar from "./checkboxbar/CheckboxBar";
import DetailSlider from "./slider/DetailSlider";
import InfoBar from "./infobar/InfoBar";
import Highlightbar from "./highlightbar/Highlightbar";
import ResetButton from "./reset/ResetButton";
import "./Toolbar.scss";

const Toolbar = ({
    setFileData,
    addElements,
    removeElements,
    addConnectionArray,
    removeConnectionArray,
    addOverlays,
    removeOverlays,
    highlightElement,
    removeHighlightElement,
    resetViewport,
    allPools,
    allLanes,
    presentFirstElements,
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
    const [showOverlay, setShowOverlay] = useState(false);
    const [highlightedElements, setHighlightedElements] = useState([]);

    const changeDetailLevel = (level) => {
        setDetailLevel(level);
        switch (level) {
            case "0":
                changeAnnotations(false);
                changeDataObjects(false);
                changeDataStores(false);
                changeOverlay(false);
                break;
            case "1":
                changeAnnotations(false);
                changeDataObjects(true);
                changeDataStores(true);
                changeOverlay(false);
                break;
            case "2":
                changeAnnotations(true);
                changeDataObjects(true);
                changeDataStores(true);
                changeOverlay(false);
                break;
            case "3":
                changeAnnotations(true);
                changeDataObjects(true);
                changeDataStores(true);
                changeOverlay(true);
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

    const changeOverlay = (showIt) => {
        if (showIt !== showOverlay) {
            if (showIt) {
                addOverlays(presentFirstElements);
            } else {
                removeOverlays();
            }
            setShowOverlay(showIt);
        }
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
                showOverlay={showOverlay}
                changeAnnotations={changeAnnotations}
                changeDataObjects={changeDataObjects}
                changeDataStores={changeDataStores}
                changeMessageFlow={changeMessageFlow}
                changeOverlay={changeOverlay}
            />
            {(allPools.length > 0 || allLanes.length > 0) && (
                <Highlightbar
                    allPools={allPools}
                    allLanes={allLanes}
                    highlightedElements={highlightedElements}
                    setHighlightedElements={setHighlightedElements}
                    highlightElement={highlightElement}
                    removeHighlightElement={removeHighlightElement}
                />
            )}
            <InfoBar detailLevel={detailLevel} />
            <DetailSlider
                detailLevel={detailLevel}
                changeDetailLevel={changeDetailLevel}
            />
            <ResetButton resetViewport={resetViewport} />
            <CloseButton setFileData={setFileData} />
        </>
    );
};

export default Toolbar;
