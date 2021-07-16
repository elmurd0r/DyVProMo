import React, { useState } from "react";
import "./App.scss";
import BpmnViewer from "./viewer/BpmnViewer";
import "bootstrap/dist/css/bootstrap.min.css";
import FileImport from "./fileimport/FileImport";
import Title from "./Title";

const RootComponent = () => {
    const [fileData, setFileData] = useState(null);

    if (!fileData) {
        return (<div className="container h-100">
            <Title />
            <FileImport setFileData={setFileData} />
        </div>);
    }

    return (<BpmnViewer fileData={fileData} setFileData={setFileData} />);
};

export default RootComponent;
