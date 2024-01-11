import styled from "styled-components";

const StyledAbout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;

    .buttons {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding-inline: 0.5rem;
        max-width: 50rem;
    }
    .active {
        display: flex;
    }
    .disabled {
        display: none;
    }

    #about {
        background-color: #1d2331;
        color: white;
        font-family: "Inter", sans-serif;
        width: 100%;
        border-radius: 0.5rem;
        flex-direction: column;
        gap: 2rem;
        padding-inline: 1rem;
        padding-bottom: 3rem;
        padding-top: 2rem;
        margin-bottom: 3rem;

        h2 {
            text-align: center;
        }
    }

    #tecnologies {
        width: 100%;
        margin-top: 2rem;
        height: 100%;
        ul {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
            align-items: center;
            margin-bottom: 3rem;
        }
        li {
            width: 100px;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            text-align: center;
            gap: 3px;

            &:hover {
                scale: 1.1;
            }
        }
        h3 {
            font-family: "Nunito";
            font-weight: 600;
            font-size: 0.875rem;
        }
        img {
            width: 50px;
            height: 50px;
            cursor: pointer;
        }
    }
`;

export default StyledAbout;
