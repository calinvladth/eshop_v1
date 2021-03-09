import React, {createRef, useEffect, useState} from 'react';
import Routes from "./pages/routes";
import './assets/style/index.sass'
import {useDispatch} from "react-redux";
import {RenderCartData} from "./redux/cart/actions";
import axios from "axios";
import {api} from "./config";
import ServerErrorPage from "./pages/server_error";
import ToastComponent from "./components/toast";
import {GetConfig} from "./redux/config/actions";
import LoadingComponent from "./components/loading";

function App() {
    const [server, setServer] = useState(null)

    useEffect(() => {
        axios.get(`${api}/check_server/`).then(handleSuccess, handleError)
    }, [server])


    function handleSuccess() {
        setServer(true)
    }

    function handleError() {
        setServer(false)
    }

    if (typeof server === 'boolean') {
        if (server) return <AppStore/>
        else return <ServerErrorPage/>
    } else return <LoadingComponent/>
}

const AppStore = () => {
    const dispatch = useDispatch()
    dispatch(GetConfig())
    dispatch(RenderCartData())
    const appRef = createRef()

    useEffect(() => {
        appRef.current.scrollIntoView()
    }, [appRef])

    const style = {
        overflowX: 'hidden'
    }

    return (
        <div style={style} ref={appRef}>
            <Routes/>
            <ToastComponent/>
        </div>
    );
}

export default App;
