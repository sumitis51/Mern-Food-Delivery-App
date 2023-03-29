import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";

const BrowserRoutes=()=>{
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    )
}

export default BrowserRoutes;