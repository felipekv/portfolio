import Header from "../../components/Header";
import StyledAbout from "./style";
import StyledButton from "../../styles/buttons";
import HTMLIcon from "../../assets/HtmlIcon.svg";
import CSSIcon from "../../assets/CssIcon.svg";
import DjangoIcon from "../../assets/DjangoIcon.svg";
import GitIcon from "../../assets/GitIcon.svg";
import JavaScriptIcon from "../../assets/JavascriptIcon.svg";
import MaterialUiIcon from "../../assets/MaterialUiIcon.svg";
import MySQLIcon from "../../assets/MySQLIcon.svg";
import NodeIcon from "../../assets/NodeIcon.svg";
import PrismaIcon from "../../assets/PrismaIcon.svg";
import PythonIcon from "../../assets/PythonIcon.svg";
import ReactIcon from "../../assets/ReactIcon.svg";
import StyledComponentsIcon from "../../assets/StyledComponentsIcon.svg";
import TailwindIcon from "../../assets/TailwindIcon.svg";
import TypeOrmIcon from "../../assets/TypeOrmIcon.png";
import TypescriptIcon from "../../assets/TypeScriptIcon.svg";
import PostgreIcon from "../../assets/PostgreIcon.svg";
import ExpressIcon from "../../assets/ExpressIcon.png";
import NestIcon from "../../assets/NestIcon.svg";
import { useState } from "react";

const About = () => {
    const [aboutMeIsOpen, setAboutMeIsOpen] = useState(true);
    const [tecnologiesIsOpen, setTecnologiesIsOpen] = useState(false);

    const chooseAboutMeSection = () => {
        setAboutMeIsOpen(true);
        setTecnologiesIsOpen(false);
    };

    const chooseTecnologiesSection = () => {
        setAboutMeIsOpen(false);
        setTecnologiesIsOpen(true);
    };

    return (
        <StyledAbout>
            <Header />
            <main>
                <section className="buttons">
                    <StyledButton onClick={() => chooseAboutMeSection()}>
                        Sobre mim
                    </StyledButton>
                    <StyledButton onClick={() => chooseTecnologiesSection()}>
                        Tecnologias
                    </StyledButton>
                </section>
                <section id="about" className={aboutMeIsOpen ? "active" : "disabled"}>
                    <h3>Sobre mim</h3>
                    <p>
                        Apaixonado por tecnologia desde criança, sempre tive interesse na área. Quando decidi cursar o ensino superior, escolhi por influência de terceiros e optei por cursos que não me agradaram. Foi então que parei para refletir: por que não estudar algo que despertava meu interesse desde jovem? Assim, decidi ingressar na faculdade de Ciência da Computação na UFPel (Universidade Federal de Pelotas), onde minha paixão infantil pela tecnologia só cresceu. Atualmente, estou prestes a me formar.

                    </p>
                    <p>
                        Além da faculdade, recentemente participei de um curso de Desenvolvimento Web Fullstack pela Kenzie Academy Brasil, no qual tive experiências excelentes. Desenvolver projetos e ser chamado para ser Monitor (Peer Coach) de Frontend foram oportunidades que me permitiram aprimorar tanto minhas habilidades técnicas quanto as interpessoais.
                    </p>
                    <p>
                        Essas experiências contribuíram significativamente para o meu crescimento profissional e pessoal, consolidando minha paixão pela tecnologia. Estou animado para continuar aprendendo e buscando desafios na área de Ciência da Computação.
                    </p>
                </section>
                <section
                    id="tecnologies"
                    className={tecnologiesIsOpen ? "active" : "disabled"}
                >
                    <ul>
                        <li>
                            <img src={CSSIcon} alt="CSS" />
                            <h3>CSS3</h3>
                        </li>
                        <li>
                            <img src={HTMLIcon} alt="HTML" />
                            <h3>HTML5</h3>
                        </li>
                        <li>
                            <img src={ReactIcon} alt="React.js" />
                            <h3>React.js</h3>
                        </li>
                        <li>
                            <img src={NodeIcon} alt="Node.js" />
                            <h3>Node.js</h3>
                        </li>
                        <li>
                            <img src={JavaScriptIcon} alt="Javascript" />
                            <h3>Javascript</h3>
                        </li>
                        <li>
                            <img src={TypescriptIcon} alt="Typescript" />
                            <h3>Typescript</h3>
                        </li>
                        <li>
                            <img src={GitIcon} alt="Git" />
                            <h3>Git</h3>
                        </li>
                        <li>
                            <img src={ExpressIcon} alt="Express.js" />
                            <h3>Express.js</h3>
                        </li>
                        <li>
                            <img src={NestIcon} alt="Nest.js" />
                            <h3>Nest.js</h3>
                        </li>
                        <li>
                            <img src={PrismaIcon} alt="PrismaORM" />
                            <h3>PrismaORM</h3>
                        </li>
                        <li>
                            <img src={TypeOrmIcon} alt="TypeORM" />
                            <h3>TypeORM</h3>
                        </li>
                        <li>
                            <img src={PythonIcon} alt="Python" />
                            <h3>Python</h3>
                        </li>
                        <li>
                            <img src={DjangoIcon} alt="Django Rest Framework" />
                            <h3>Django Rest Framework</h3>
                        </li>
                        <li>
                            <img
                                src={StyledComponentsIcon}
                                alt="Styled-Components"
                            />
                            <h3>Styled-Components</h3>
                        </li>
                        <li>
                            <img src={TailwindIcon} alt="TailwindCSS" />
                            <h3>TailwindCSS</h3>
                        </li>
                        <li>
                            <img src={MaterialUiIcon} alt="Material UI" />
                            <h3>Material UI</h3>
                        </li>
                        <li>
                            <img src={PostgreIcon} alt="PostgreSQL" />
                            <h3>PostgreSQL</h3>
                        </li>
                        <li>
                            <img src={MySQLIcon} alt="MySQL" />
                            <h3>MySQL</h3>
                        </li>
                    </ul>
                </section>
            </main>
        </StyledAbout>
    );
};

export default About;
