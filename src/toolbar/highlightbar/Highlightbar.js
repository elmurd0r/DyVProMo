import React from "react";
import HighlightToggle from "./HighlightToggle.es";

const Highlightbar = ({
    allPools,
    allLanes,
    highlightedElements,
    setHighlightedElements,
    highlightElement,
    removeHighlightElement,
}) => {
    return (
        <div className="bdv-highlight-bar bdv-toolbar-ctrl p-2">
            {allPools.length > 0 ? (
                <div>
                    <b>Pools</b>
                </div>
            ) : (
                <></>
            )}
            {allPools.map((pool) => {
                let name =
                    pool.businessObject.name == null
                        ? pool.id
                        : pool.businessObject.name;
                return (
                    <HighlightToggle
                        elem={pool}
                        label={name}
                        key={pool.id}
                        highlightedElements={highlightedElements}
                        setHighlightedElements={setHighlightedElements}
                        highlightElement={highlightElement}
                        removeHighlightElement={removeHighlightElement}
                    />
                );
            })}
            {allLanes.length > 0 ? (
                <div>
                    <b>Lanes</b>
                </div>
            ) : (
                <></>
            )}
            {allLanes.map((lane) => {
                let name =
                    lane.businessObject.name == null
                        ? lane.id
                        : lane.businessObject.name;
                return (
                    <HighlightToggle
                        elem={lane}
                        label={name}
                        key={lane.id}
                        highlightedElements={highlightedElements}
                        setHighlightedElements={setHighlightedElements}
                        highlightElement={highlightElement}
                        removeHighlightElement={removeHighlightElement}
                    />
                );
            })}
        </div>
    );
};

export default Highlightbar;
