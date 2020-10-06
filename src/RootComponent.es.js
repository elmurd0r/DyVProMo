import React, { useState } from "react";
import "./App.css";
import BpmnViewer from "./viewer/BpmnViewer.es";
import "bootstrap/dist/css/bootstrap.min.css";
import FileImport from "./fileimport/FileImport.es";
import Title from "./Title.es";

const RootComponent = () => {
    const [fileData, setFileData] = useState(null);

    return (
        <>
            {fileData ? (
                <BpmnViewer fileData={fileData} setFileData={setFileData} />
            ) : (
                <div className="container h-100">
                    <Title />
                    <FileImport setFileData={setFileData} />
                </div>
            )}
        </>
    );
};

export default RootComponent;
