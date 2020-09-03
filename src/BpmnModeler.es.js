import React, {useEffect} from 'react';
import Viewer from 'bpmn-js/lib/Viewer';
import axios from 'axios';
import {is} from "bpmn-js/lib/util/ModelUtil";

const BpmnModeler = () => {

    useEffect(() => {
        setupModeler()
    });

    let viewer;

    let allAnnotationsCopy;

    let allAnnotations;
    let allDataObjects;
    let allDataStores;

    const setupModeler = () => {

        //Modeler to model BPMN 2.0 diagrams but this should not be wanted
        //don't forget the import if necessary contrary to expectation
        //let modeler = new Modeler({container: '#canvas'});

        //get the bpmn file over inet (xml file format) later this should be replaced with load file from explorer
        let diagramUrl = 'https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn';
        viewer = new Viewer({container: '#canvas'});
        console.log("gg");



        axios.get('diagram_data_flow.bpmn')
            .then((response) => {
                console.log(response);
                viewer.importXML(response.data);

                let canvas = viewer.get('canvas');
                //canvas.zoom('fit-viewport');

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
        let canvas = viewer.get('canvas');
        connectionArray.forEach((con, index)=>{
            canvas.removeConnection(con);
        });
    };

    /**
     * removes all elements including incoming and outgoing connections
     * @param elements all Elements which must be removed
     */
    const removeElements = (elements) => {
        let canvas = viewer.get('canvas');
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
        let canvas = viewer.get('canvas');
        connectionArray.forEach((con, index)=>{
            canvas.addConnection(con);
        });
    };

    /**
     * add all elements including incoming and outgoing connections
     * @param elements all Elements which must be removed
     */
    const addElements = (elements) => {
        let canvas = viewer.get('canvas');
        elements.forEach((elem, index)=>{
            addConnections(elem);
            canvas.addShape(elem);
        });
    };

    const selectAllAnnotations = () => {
        let elementRegistry = viewer.get('elementRegistry');
        allAnnotations = elementRegistry.filter(function(element) {
            return is(element, 'bpmn:TextAnnotation');
        });
        console.log(elementRegistry);
        console.log(allAnnotations);
        console.log(viewer);
        allAnnotationsCopy = [...allAnnotations];
    };

    const hideAnnotation = () => {
        //TODO: move the select method after load bpmn
        selectAllAnnotations();
        console.log(allAnnotations);
        removeElements(allAnnotations);
    };

    const showAnnotation = () => {
        addElements(allAnnotations);
    };

    const selectAllDataObj = () => {
        let elementRegistry = viewer.get('elementRegistry');
        allDataObjects = elementRegistry.filter(function(element) {
            return is(element, 'bpmn:DataObjectReference');
        });
        console.log(elementRegistry);
        console.log(allDataObjects);
        console.log(viewer);
    };

    const hideDataObj = () => {
        //TODO: move the select method after load bpmn
        selectAllDataObj();
        console.log(allDataObjects);
        removeElements(allDataObjects);
    };

    const showDataObj = () => {
        addElements(allDataObjects);
    };

    return (
        <>
            <div id="canvas"/>
            <button className="btn-primary btn" onClick={()=>hideAnnotation()} >Hide Annotation</button>
            <button className="btn-primary btn" onClick={()=>showAnnotation()} >Show Annotation</button>
            <button className="btn-primary btn" onClick={()=>hideDataObj()} >Hide Data Object</button>
            <button className="btn-primary btn" onClick={()=>showDataObj()} >Show Data Object</button>
            {/* TODO: implement and adapt correct methods */}
            <button className="btn-primary btn" onClick={()=>hideAnnotation()} >Hide Data Store</button>
            <button className="btn-primary btn" onClick={()=>showAnnotation()} >Show Data Store</button>
        </>
    );
};

export default BpmnModeler;
