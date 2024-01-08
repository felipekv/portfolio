import StyledHeader from "./style";
import LogoHeader from "../../assets/LogoPortfolio.png";
import { useState } from "react";

const Header = () => {
    const [navBarIsOpen, setNavBarIsOpen] = useState(false);
    return (
        <StyledHeader>
            <img src={LogoHeader} alt="Logo escrito <Felipe Vergara/>" />
            <nav>
                <div>
                    <ul id="navbar" className={navBarIsOpen ? "active" : ""}>
                        <li>
                            <a to="/">Início</a>
                        </li>
                        <li>
                            <a to="/">Sobre mim</a>
                        </li>
                        <li>
                            <a to="/">Projetos</a>
                        </li>
                        <li>
                            <a to="/">Contato</a>
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
