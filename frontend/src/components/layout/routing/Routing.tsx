import { Navigate, Route, Routes } from "react-router-dom";
import List from "../../pages/list/List";
import Add from "../../pages/add/Add";
// import NotFound from "../not-found/NotFound";


export default function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/list"/>} />
            <Route path="/list" element={<List />} />
            <Route path="/add" element={<Add/>} />
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    )   
}
