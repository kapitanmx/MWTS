import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 0 100px;
`;

export const Content = styled.div`
    max-width: 768px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    padding: 20px;
    white-space: wrap;
    /* border: 2px solid var(--medGrey);
    border-radius: 50px; */
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        padding: 40px;
        a {
            color: var(--black);
        }
    }
    img {
        width: 100%;
        height: auto;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin: 0;
        padding: 0;
        img {
            width: 15%;
            height: auto;
        }
    }
`;
