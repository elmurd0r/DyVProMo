import React from "react";

const FileImportAlert = ({ setShowAlert }) => {
    return (
        <div className="col-6 alert alert-danger alert-dismissible fade show align-self-start">
            <strong>Holy guacamole!</strong> We could not display that diagram.
            Please make sure your input is valid BPMN 2.0 XML.
            <button
                type="button"
                className="btn-close"
                onClick={() => setShowAlert(false)}
            />
        </div>
    );
};

export default FileImportAlert;
