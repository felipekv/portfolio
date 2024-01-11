import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    min-height: 4.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding-inline: 1rem;
    background-color: #1d2331;

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #1d2331;
        padding: 20px 30px;
    }
    #navbar {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #navbar li {
        list-style: none;
        padding: 0 20px;
        position: relative;
    }

    #navbar li a {
        text-decoration: none;
        font-size: 0.9;
        font-weight: 600;
        color: #fff;
        transition: 0.3s ease-in-out;
        cursor: pointer;
    }
    #navbar li a:hover {
        color: #17cf97;
        text-shadow: 0px 0px 3px #17cf97;
    }

    #mobile {
        display: none;
    }

    #mobile i {
        color: #fff;
        align-items: center;
    }
    #bar {
        color: white;
    }

    @media screen and (max-width: 768px) {
        nav {
            justify-self: flex-end;
        }
        #navbar {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            position: fixed;
            top: 72px;
            right: -300px;
            width: 300px;
            height: 100vh;
            background: #1d2a30;
            padding: 40px 0 0 10px;
            transition: 0.3s ease-in-out;
        }

        #navbar.active {
            right: 0px;
        }

        #navbar li {
            margin-bottom: 25px;
        }

        #mobile {
            display: block;
        }

        #mobile i {
            font-size: 24px;
            cursor: pointer;
        }
    }

    @media screen and (min-width: 769px) {
        #mobile {
            display: none;
        }
    }
`;

export default StyledHeader;
