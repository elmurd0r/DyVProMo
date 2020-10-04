import React, {useEffect, useState} from 'react';
import Viewer from 'bpmn-js/lib/Viewer';
import axios from 'axios';
import {is} from "bpmn-js/lib/util/ModelUtil";
import Annotation from "./annotation/Annotation.es";
import DataObjects from "./dataobjects/DataObjects.es";
import DataStore from "./datastores/DataStore.es";

const BpmnViewer = () => {

    let viewer;
    const [canvas, setCanvas] = useState(null);
    const [elementRegistry, setElementRegistry] = useState(null);


    const [allAnnotations, setAllAnnotations] = useState(null);
    const [allDataObjects, setAllDataObjects] = useState(null);
    const [allDataStores, setAllDataStores] = useState(null);

    useEffect(() => {
        setupModeler()
    },[]);


    const setupModeler = () => {

        //Modeler to model BPMN 2.0 diagrams but this should not be wanted
        //don't forget the import if necessary contrary to expectation
        //let modeler = new Modeler({container: '#canvas'});

        //get the bpmn file over inet (xml file format) later this should be replaced with load file from explorer
        let diagramUrl = 'https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn';
        viewer = new Viewer({container: '#canvas'});


        axios.get('diagram_data_flow.bpmn')
            .then((response) => {
                console.log(response);
                viewer.importXML(response.data).then(
                    ()=>{
                        setCanvas(viewer.get('canvas'));
                        setElementRegistry(viewer.get('elementRegistry'));
                        setAllAnnotations(selectElements('TextAnnotation'));
                        setAllDataObjects(selectElements('DataObjectReference'));
                        setAllDataStores(selectElements('DataStoreReference'));
                        //canvas.zoom('fit-viewport');
                    }
                );
            })
            .catch(e => console.log(e))
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
        connectionArray.forEach((con, index)=>{
            canvas.removeConnection(con);
        });
    };

    /**
     * removes all elements including incoming and outgoing connections
     * @param elements all Elements which must be removed
     */
    const removeElements = (elements) => {
        elements.forEach((elem, index)=>{
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
        connectionArray.forEach((con, index)=>{
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
        return viewer.get('elementRegistry').filter(function(element) {
            return is(element, 'bpmn:' + bpmnElementName);
        });
    };

    return (
        <>
            <div id="canvas"/>
            <Annotation allAnnotations={allAnnotations} removeElements={removeElements} addElements={addElements} />
            <DataObjects allDataObjects={allDataObjects} removeElements={removeElements} addElements={addElements} />
            <DataStore allDataStores={allDataStores} removeElements={removeElements} addElements={addElements} />
        </>
    );
};

export default BpmnViewer;
