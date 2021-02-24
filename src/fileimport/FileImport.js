import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import FileImportAlert from "./FileImportAlert";
import "./FileImport.scss"
import Viewer from "bpmn-js";

const FileImport = ({ setFileData }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            setShowLoading(true);
            console.log(file);
            const reader = new FileReader();

            reader.onabort = () => console.log("file reading was aborted");
            reader.onerror = () => console.log("file reading has failed");
            reader.onload = () => {
                setShowLoading(false);
                console.log(reader);
                if (file.name.split(".").pop().toLowerCase() === "bpmn") {
                    let view = new Viewer();
                    view.importXML(reader.result)
                        .then(()=>{
                            setFileData(reader.result);
                        },
                            (onReject)=>{
                                console.log(onReject);
                                setShowAlert(true);
                            });
                } else {
                    setShowAlert(true);
                }
            };
            reader.readAsText(file);
        });
    }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
    } = useDropzone({
        onDrop,
        maxFiles: 1,
        multiple: false,
    });

    return (
        <div className="row justify-content-md-center bdv-h-44">
            <div className="col-3" />
            {showLoading ? (
                <div className="col-6 p-0 text-center">
                    <div className="spinner-border" role="status"/>
                </div>
            ) :
                (
                    <div className="col-6 p-0 text-center">
                        <div
                            {...getRootProps()}
                            className={`bdv-dropzone ${
                                isDragActive
                                    ? isDragAccept
                                    ? "bdv-dropzone-draged"
                                    : "bdv-dropzone-reject"
                                    : ""
                            }`}
                        >
                            <input {...getInputProps()} />
                            {isDragActive ? (
                                isDragAccept ? (
                                    <span>Drop the file here ...</span>
                                ) : (
                                    <span>Too many files ...</span>
                                )
                            ) : (
                                <span>
                            Drag 'n' Drop BPMN file here, or click to select
                            file
                        </span>
                            )}
                        </div>
                    </div>
                )}
            <div className="col-3" />
            {showAlert && <FileImportAlert setShowAlert={setShowAlert} />}
            <div className="col-12 text-center align-self-end">
                Use Dynamic BPMN Viewer to view BPMN 2.0 diagrams in your
                browser and modify the level of detail.
            </div>
        </div>
    );
};

export default FileImport;
