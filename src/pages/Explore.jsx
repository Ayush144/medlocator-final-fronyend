import React from 'react';
import useCollapse from 'react-collapsed';
import './Explore.css';
function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'Collapse Map' : 'Expand Map'}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <div className='mxheight2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit quis repellat inventore nostrum modi, cumque cum exercitationem numquam, corrupti quia eveniet! Corrupti, quod? Consequatur alias perspiciatis eligendi incidunt modi?
                    </div>
                </div>
            </div>
        </div>
    );
}
function Explore() {
    return (
        <Collapsible />
    );
}
export default Explore;