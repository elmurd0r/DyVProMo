import React, { useState } from "react";
import "./App.scss";
import BpmnViewer from "./viewer/BpmnViewer";
import "bootstrap/dist/css/bootstrap.min.css";
import FileImport from "./fileimport/FileImport";
import Title from "./Title";
import Viewer from "bpmn-js";
import bpmnFile from "./files/SupportablaufCostumerRequest.bpmn";

const RootComponent = () => {
    const [fileData, setFileData] = useState(null);

    fetch(bpmnFile)
        .then((response) => response.text())
        .then((content) => {
            let view = new Viewer();
            view.importXML(content).then(
                () => {
                    setFileData(content);
                },
                (onReject) => {
                    console.error("Failed to load static XML-File. Error:", onReject);
                }
            );
        });

    if (!fileData) {
        return (
            <div className="container h-100">
                <Title />
                <FileImport setFileData={setFileData} />
            </div>
        );
    }

    return <BpmnViewer fileData={fileData} setFileData={setFileData} />;
};

export default RootComponent;
