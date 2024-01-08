import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
    );
};