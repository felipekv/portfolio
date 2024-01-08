import styled from "styled-components";

const StyledContact = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 3rem;

        ul {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 3rem;
            margin-top: 9rem;

            li {
                padding: 6px;
                height: 60px;
                width: 60px;
                display: flex;
                align-items: center;
                justify-items: center;
            }

            a {
                width: 50px;
                height: 50px;
                align-self: center;
                display: flex;
                justify-content: center;
                justify-items: center;
            }
            img {
                width: 45px;
                height: 45px;
                align-self: center;
            }
        }
    }
`;

export default StyledContact;
