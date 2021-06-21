import React, {useEffect} from "react";
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {useSelector} from "react-redux";

const toastList = new Set()

const ToastComponent = () => {
    const {alerts} = useSelector(state => state)


    useEffect(() => {

        if (toastList.size < 5) {
            if (alerts.message) {
                let id;
                if (alerts.success) {
                    id = toast.success(<p className="font__paragraph">{alerts.message}</p>, {
                        // I'm using the onClose hook here to remove the id
                        // from the set
                        onClose: () => toastList.delete(id)
                    })
                } else {
                    id = toast.error(<p className="font__paragraph">{alerts.message}</p>, {
                        // I'm using the onClose hook here to remove the id
                        // from the set
                        onClose: () => toastList.delete(id)
                    })
                }
                toastList.add(id)
            }
        }

        // eslint-disable-next-line
    }, [alerts.timestamp])


    return (
        <div>
            <ToastContainer position={"top-right"}/>
        </div>
    )
}

export default ToastComponent