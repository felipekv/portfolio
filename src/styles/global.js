import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
    }

    body, html{
        width: 100dvw;
        height: 100dvh;
    }
    
    body{
        background-color: #FFFFFF;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        overflow-y: hidden;
    }

    body, button, input, select, option, label, textarea{
        font-family: "Inter", sans-serif;
    }

    ul,ol{
        list-style: none;
    }

    button, link{
        cursor: pointer;
        appearance: none;
        border: none;
    }

    input, textarea, select{
        border-radius: 0;
        border: none;
        background: transparent;
    }

    a{
        color: unset;
        text-decoration: none;
    }

    b{
        font-weight: bold;
    }

    #root{
        width: 100%;
        height: 100%;
    }
`;
