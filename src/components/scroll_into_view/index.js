import React, {createRef, useEffect} from "react";
import {useLocation} from "react-router";

const ScrollIntoView = ({children}) => {
    const location = useLocation()
    const itemRef = createRef()
    useEffect(() => {
        itemRef.current.scrollIntoView({behavior: 'smooth'})
        // eslint-disable-next-line
    }, [
        location
    ])
    return <div ref={itemRef}>
        {children}
    </div>
}

export default ScrollIntoView