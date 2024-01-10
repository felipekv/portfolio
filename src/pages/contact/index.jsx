import Header from "../../components/Header";
import StyledContact from "./style";
import EmailIcon from "../../assets/EmailIcon.svg";
import WhatsappIcon from "../../assets/WhatsappIcon.svg";
import LinkedinIcon from "../../assets/LinkedinIcon.svg";
import CurriculumIcon from "../../assets/CurriculumIcon.svg";

const Contact = () => {
    return (
        <StyledContact>
            <Header />
            <main>
                <h2>Formas de contato</h2>
                <ul>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/felipekvergara/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={LinkedinIcon} alt="Ícone do Linkedin" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://wa.me/5553984337350/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={WhatsappIcon} alt="Ícone do WhatsApp" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:felipekvergara@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={EmailIcon} alt="Ícone de email" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://drive.google.com/file/d/1Pz_sy9Iew7lynuvM7_CoxatrYF2smfZb/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={CurriculumIcon} alt="Ícone de formulário, representando o link do curriculum" />
                        </a>
                    </li>
                </ul>
            </main>
        </StyledContact>
    );
};

export default Contact;
