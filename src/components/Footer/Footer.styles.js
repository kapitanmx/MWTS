import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px 40px;
    background: var(--medGrey);
    background-size: cover;
    p {
        color: var(--white);
    }
    @media screen and (max-width: 768px) {
        margin: 0;
        padding: 20px;
    }
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px 20px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
    img {
        width: 50px;
        height: auto;
        margin: 0 10px;
    }
    @media screen and (max-width: 768px) {
        justify-content: flex-start;
    }
`;

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    p {
        margin: 50px;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0 100px 0 0;
        margin: 0 auto;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    padding: 20px;
    div {
        display: flex;
        flex-direction: column;
        p {
            margin: 25px;
        }
        h3 {
            color: var(--white);
            margin: 25px;
        }
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 20px 100px 20px 0;
    }
`;

export const Logo = styled.img`
    width: 256px;
    height: auto;
`;

export const FooterEnd = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`;

export const ContactButton = styled.div`
    display: flex;
    background: transparent;
    flex-direction: column;
    margin: 20px auto;
    padding: 25px 50px;
    border: 2px solid var(--lightGrey);
    border-radius: 50px;
    text-decoration: none;
    p {
        color: var(--lightGrey);
        margin: 0;
        padding: 0;
    }
    &:hover {
        background: var(--lightGrey);
        p {
            color: var(--black);
        }
    }
`;