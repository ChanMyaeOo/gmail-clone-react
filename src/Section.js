import React, { useState } from "react";
import "./Section.css";

function Section({ Icon, title, color, selected }) {
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const boxStyle = {
        borderBottom: isHover ? `2px solid ${color}` : `2px solid gray`,
        color: isHover ? color : "gray",
        cursor: "pointer",
        backgroundColor: isHover ? "whitesmoke" : "white",
    };
    return (
        <div
            style={boxStyle}
            className={`section ${selected && `section--selected`}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Icon />
            <h4>{title}</h4>
        </div>
    );
}

export default Section;
