import Header from "../../components/Header";
import StyledProject from "./style";
import BackendContatos from "../../assets/BackendContatos.png";
import FrontendContatos from "../../assets/FrontendContatos.png";
import KenzieBurguer from "../../assets/KenzieBurguer.png";
import OpenMusic from "../../assets/OpenMusic.png";

const Projects = () => {
    return (
        <StyledProject>
            <Header />
            <section>
                <h2>Projetos</h2>
                <ul>
                    <li>
                        <figure>
                            <img
                                src={FrontendContatos}
                                alt="Imagem da parte frontend do projeto Contatos"
                            />
                            <figcaption>
                                <h3>Frontend Contatos</h3>
                                <div>
                                    <a
                                        href="https://github.com/felipekv/frontend-contatos"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        Repositório
                                    </a>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img
                                src={BackendContatos}
                                alt="Imagem da documentação do backend do projeto de Contatos"
                            />
                            <figcaption>
                                <h3>Backend Contatos</h3>
                                <div>
                                    <a
                                        href="https://github.com/felipekv/backend-contatos"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        Repositório
                                    </a>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img
                                src={OpenMusic}
                                alt="Imagem do projeto frontend Open Music"
                            />
                            <figcaption>
                                <h3>Open Music</h3>
                                <div
                                    href=""
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <a
                                        href="https://felipekv.github.io/OpenMusic/"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        Deploy
                                    </a>
                                    <a
                                        href="https://github.com/felipekv/OpenMusic"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        Repositório
                                    </a>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img
                                src={KenzieBurguer}
                                alt="Imagem do projeto frontend Kenzie Burguer"
                            />
                            <figcaption>
                                <h3>Kenzie Burguer</h3>
                                <div>
                                    <a
                                        href="https://kenzie-burguer-felipekv.vercel.app"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        Deploy
                                    </a>
                                    <a
                                        href="https://github.com/felipekv/KenzieBurguer"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        Repositório
                                    </a>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </section>
        </StyledProject>
    );
};

export default Projects;
