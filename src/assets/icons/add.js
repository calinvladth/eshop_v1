import React from "react";

const AddSvg = () => {
    const style = {
        width: '100%',
        height: '100%',
        enableBackground: 'new 0 0 42 42',
        fill: '#000000'
    }
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
             x="0px"
             y="0px"
             style={style}
             viewBox="0 0 42 42" xmlSpace="preserve">
            <polygon points="42,20 22,20 22,0 20,0 20,20 0,20 0,22 20,22 20,42 22,42 22,22 42,22 "/>
        </svg>
    )
}

export default AddSvg