import React, {useState} from "react";

const Annotation = ({ allAnnotations, removeElements, addElements }) => {

    const [showAnnotations, setShowAnnotations] = useState(true);

    const hideAnnotation = () => {
        removeElements(allAnnotations);
    };

    const showAnnotation = () => {
        addElements(allAnnotations);
    };

    return (
        <>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={showAnnotations} onChange={(e)=> {
                    if(e.target.checked) {
                        showAnnotation();
                    } else {
                        hideAnnotation();
                    }
                    setShowAnnotations(e.target.checked);
                }}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Annotations</label>
            </div>
        </>
    );
};

export default Annotation;
