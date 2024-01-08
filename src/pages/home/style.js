import styled from "styled-components";

const StyledHome = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 3.75rem;

    .main{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 5rem;
        margin-top: 5rem;
    }
    .main div{
        max-width: 280px;
        height: 62px;
    }
    h2 {
        font-size: 18px;
        max-width: 600px;
        line-height: 30px;
        font-weight: bold;
        margin-bottom: 4px;
        font-family: "Nunito", sans-serif;
        color: black;
    }
    p {
        font-size: 18px;
        width: 247px;
        font-family: "Nunito", sans-serif;
        font-weight: bold;
        color: black;
        height: 24px;
        text-align: left;
    }

    .main img{
        width: 400px;
        height: 300px;
        border-radius: 0.2rem;
        box-shadow: rgb(0, 0, 0, 0.75) 1px 2px 4px 2px;
    }

    .contact{
        display: flex;
        margin-top: 5rem;
        width: 100%;

        ul{
            width: 100%;
            display: flex;
            flex-direction: row;
            gap: 1rem;
            justify-content: center;
            align-items: center;
        }
    }

    .contact img{
        width: 30px;
        height: 30px;
    }

    .contact a{
        display: flex;
        width: 30px;
        height: 30px;
        box-shadow: rgb(0, 0, 0) 1px 1px 5px 1px;
        border-radius: 4px;

        &:hover{
            background-color: silver;
            box-shadow: rgb(0, 0, 0) 1px 1px 5px 4px;
        }
    }
    @media screen and (max-width: 768px) {
        .main{
            flex-wrap: nowrap;
            flex-direction: column;
            gap: 6rem;
        }

        .main img{
            width: 280px;
            height: 200px;
        }
    }

`;

export default StyledHome;
