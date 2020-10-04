import React from 'react';

const Annotation =  ({ allAnnotations, removeElements, addElements}) => {


    const hideAnnotation = () => {
        removeElements(allAnnotations);
    };

    const showAnnotation = () => {
        addElements(allAnnotations);
    };

    return (
        <>
            <button className="btn-primary btn" onClick={()=>hideAnnotation()} >Hide Annotation</button>
            <button className="btn-primary btn" onClick={()=>showAnnotation()} >Show Annotation</button>
        </>
    );
};

export default Annotation;
