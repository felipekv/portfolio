import styled from "styled-components";

const StyledProject = styled.div`
    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 4rem;
        gap: 2rem;

        h2 {
            font-family: "Nunito", sans-serif;
        }

        ul {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 3rem;
        }
        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            background-color: silver;
            padding: 0.5rem;
            border-radius: 0.25rem;

            &:hover{
                scale: 1.1;
            }
        }
        figure {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
        }
        figcaption {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;

            div {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 0.5rem;

                a{
                    background-color: #1d2331;
                    color: white;
                    padding-inline: 0.25rem;
                    padding-top: 0.125rem;
                    padding-bottom: 0.125rem;
                    border-radius: 0.13rem;
                    font-weight: 600;
                    
                    &:hover{
                        background-color: #1FDF64;
                        color: black;
                    }
                }
            }
        }
    }
    section img {
        width: 280px;
        height: 150px;
    }
`;

export default StyledProject;
