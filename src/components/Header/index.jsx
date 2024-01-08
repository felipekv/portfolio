import StyledHeader from "./style";
import LogoHeader from "../../assets/LogoPortfolio.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [navBarIsOpen, setNavBarIsOpen] = useState(false);
    return (
        <StyledHeader>
            <img src={LogoHeader} alt="Logo escrito <Felipe Vergara/>" />
            <nav>
                <div>
                    <ul id="navbar" className={navBarIsOpen ? "active" : ""}>
                        <li>
                            <Link to="/">Início</Link>
                        </li>
                        <li>
                            <Link to="/sobre">Sobre mim</Link>
                        </li>
                        <li>
                            <Link to="/projetos">Projetos</Link>
                        </li>
                        <li>
                            <Link to="/">Contato</Link>
                        </li>
                    </ul>
                </div>
                <div id="mobile" onClick={() => setNavBarIsOpen(!navBarIsOpen)}>
                    <i
                        id="bar"
                        className={navBarIsOpen ? "fas fa-times" : "fas fa-bars"}
                    ></i>
                </div>
            </nav>
        </StyledHeader>
    );
};

export default Header;
