import {useLocation} from "react-router-dom";

export function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export function addQuery(filters) {
    let str = "";
    for (let key in filters) {
        if (str !== "") {
            str += "&";
        }
        str += key + "=" + encodeURIComponent(filters[key]);
    }
    return str
}