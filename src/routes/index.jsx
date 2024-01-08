import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Projects from "../pages/projects";
import Contact from "../pages/contact";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/contato" element={<Contact />} />
        </Routes>
    );
};