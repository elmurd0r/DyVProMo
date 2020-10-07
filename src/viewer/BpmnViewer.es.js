import React, { useEffect, useState } from "react";
import NavigatedViewer from "bpmn-js/lib/NavigatedViewer";
import { is } from "bpmn-js/lib/util/ModelUtil";
import Toolbar from "../toolbar/Toolbar.es";

const BpmnViewer = ({ fileData, setFileData }) => {
    let viewer;
    const [canvas, setCanvas] = useState(null);
    const [elementRegistry, setElementRegistry] = useState(null);

    const [allAnnotations, setAllAnnotations] = useState(null);
    const [allDataObjects, setAllDataObjects] = useState(null);
    const [allDataStores, setAllDataStores] = useState(null);

    useEffect(() => {
        setupModeler();
    }, []);

    const setupModeler = () => {
        //viewer = new Viewer({container: '#canvas'});
        viewer = new NavigatedViewer({ container: "#canvas" });

        importXML(fileData);
    };

    const importXML = (fileData) => {
        viewer.importXML(fileData).then(() => {
            setCanvas(viewer.get("canvas"));
            setElementRegistry(viewer.get("elementRegistry"));
            setAllAnnotations(selectElements("TextAnnotation"));
            setAllDataObjects(selectElements("DataObjectReference"));
            setAllDataStores(selectElements("DataStoreReference"));
            viewer.get("canvas").zoom("fit-viewport");
        });
    };

    /**
     * removes all incoming and outgoing connections from element
     * @param element is single element
     */
    const removeConnections = (element) => {
        let incomingCons = element.incoming;
        let outgoingCons = element.outgoing;

        removeConnectionArray(incomingCons);
        removeConnectionArray(outgoingCons);
    };

    /**
     * removes all incoming or outgoing connections from canvas
     * @param connectionArray is array which contains all incoming or outgoing connections
     */
    const removeConnectionArray = (connectionArray) => {
        connectionArray.forEach((con, index) => {
            canvas.removeConnection(con);
        });
    };

    /**
     * removes all elements including incoming and outgoing connections
     * @param elements all Elements which must be removed
     */
    const removeElements = (elements) => {
        elements.forEach((elem, index) => {
            removeConnections(elem);
            canvas.removeShape(elem);
        });
    };

    /**
     * add all incoming and outgoing connections from element
     * @param element is single element
     */
    const addConnections = (element) => {
        let incomingCons = element.incoming;
        let outgoingCons = element.outgoing;

        addConnectionArray(incomingCons);
        addConnectionArray(outgoingCons);
    };

    /**
     * add all incoming or outgoing connections from canvas
     * @param connectionArray is array which contains all incoming or outgoing connections
     */
    const addConnectionArray = (connectionArray) => {
        connectionArray.forEach((con, index) => {
            canvas.addConnection(con);
        });
    };

    /**
     * add all elements including incoming and outgoing connections
     * @param elements all Elements which must be removed
     */
    const addElements = (elements) => {
        elements.forEach((elem, index) => {
            if (!elementRegistry.get(elem.id)) {
                addConnections(elem);
                canvas.addShape(elem);
            }
        });
    };

    /**
     * select all elements with given bpmn Element name
     * @param bpmnElementName
     * @returns array filled with model elements
     */
    const selectElements = (bpmnElementName) => {
        return viewer.get("elementRegistry").filter((element) => {
            return is(element, "bpmn:" + bpmnElementName);
        });
    };

    return (
        <>
            <div id="canvas" />
            <Toolbar
                setFileData={setFileData}
                addElements={addElements}
                removeElements={removeElements}
                allAnnotations={allAnnotations}
                allDataObjects={allDataObjects}
                allDataStores={allDataStores}
            />
        </>
    );
};

export default BpmnViewer;
