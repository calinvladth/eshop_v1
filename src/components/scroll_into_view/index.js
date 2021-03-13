import React, {createRef, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const ScrollIntoView = ({children, top = true}) => {
    const {config} = useSelector(state => state)
    return config.success
        ?
        <Router children={children} top={top}/>
        :
        <NoRouter children={children} top={top}/>

}

const Router = ({children, top}) => {
    const location = useLocation()
    const itemRef = createRef()
    useEffect(() => {
        if (top) window.scrollTo(0, 0)
        else itemRef.current.scrollIntoView({behavior: 'smooth'})

        // eslint-disable-next-line
    }, [
        location
    ])
    return <div ref={itemRef}>
        {children}
    </div>
}

const NoRouter = ({children, top = true}) => {
    const itemRef = createRef()
    useEffect(() => {
        if (top) window.scrollTo(0, 0)
        else itemRef.current.scrollIntoView({behavior: 'smooth'})

        // eslint-disable-next-line
    }, [])
    return <div ref={itemRef}>
        {children}
    </div>
}


export default ScrollIntoView