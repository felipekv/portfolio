import Typical from "react-typical";
import Header from "../../components/Header";
import StyledHome from "./style";
import GifProgramming from "../../assets/gif-programming.gif";
import GitHubIcon from "../../assets/GithubIcon.svg";
import LinkedinIcon from "../../assets/LinkedinIcon.svg";

const Home = () => {
    return (
        <StyledHome>
            <Header />
            <main>
                <section className="main">
                    <div>
                        <h2>Olá, eu sou o Felipe 👋</h2>
                        <Typical
                            loop={Infinity}
                            steps={[
                                "Desenvolvedor Frontend ✨",
                                1200,
                                "Desenvolvedor Backend 🧱",
                                1200,
                                "Desenvolvedor Fullstack 📚",
                                1200,
                            ]}
                        ></Typical>
                    </div>
                    <aside>
                        <img
                            src={GifProgramming}
                            alt="Um GIF de uma pessoa programando."
                        />
                    </aside>
                </section>
                <section className="contact">
                    <ul>
                        <li>
                            <a
                                href="https://github.com/felipekv"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={GitHubIcon}
                                    alt="Icone de um gato referente ao Github"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/felipekvergara/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <img
                                    src={LinkedinIcon}
                                    alt="Icone das letras I N referente ao Linkedin"
                                />
                            </a>
                        </li>
                    </ul>
                </section>
            </main>
        </StyledHome>
    );
};

export default Home;
