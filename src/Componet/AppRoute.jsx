import { Route,Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Vegetable from "../Pages/Vegetable";
import Cart from "../Pages/Cart";
export default function AppRoute(){
    return(
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/About" element={<About/>}></Route>
                <Route path="/Vegetable" element={<Vegetable/>}></Route>
                <Route path="/Cart" element={<Cart></Cart>}></Route>
            </Routes>
    )
}