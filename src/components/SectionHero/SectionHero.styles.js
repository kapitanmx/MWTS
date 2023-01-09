import styled from 'styled-components';

export const Wrapper = styled.div`
    background: linear-gradient(90deg, rgba(60,73,245,1) 0%, rgba(231,148,233,1) 100%);
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    height: ${({isButton}) => isButton ? "50vw" : "30vw"};
    @media screen and (max-width: 768px) {
        height: ${({isButton}) => isButton ? "100%" : "80%"};
    }
    &:before, :after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: column;
    justify-content: center;
    word-wrap: break-word;
    z-index: 1;
    margin: 0 auto;
    padding: 40px 40px;
    h2 {
        align-self: flex-end;
        padding: 0 100px;
        color: var(--white);
    }
    h1 {
        margin: 50px auto;
        padding: 30px;
        color: var(--white);
    }
    @media screen and (max-width: 768px) {
        margin: 0;
        padding: 30px 30px;
        h2 {
            align-self: flex-start;
            padding: 0;
        }
    }
`;

export const Cube = styled.img`
    position: absolute;
    top: 30vh;
    right: 0;
    width: 15%;
    z-index: -1;
    height: auto;
    object-fit: cover;
    /* @media screen and (max-width: 1024px) {
        top: 35%;
    } */
    @media screen and (max-width: 430px) {
        width: 35%;
        top: 40vh;
    }
`;

export const PricingLink = styled.a`
    position: absolute;
    left: 2%;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-weight: 600;
    text-decoration: underline;
    padding: 20px 20px;
    color: var(--white);
`;

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: flex-start;
    cursor: pointer;
    font-weight: 500;
    margin: 30px;
    padding: 10px 100px;
    border: 2px solid var(--white);
    border-radius: 40px;
    background: transparent;
    transition: all 0.5s;
    :hover {
        background: var(--white);
        p {
            color: var(--black);
        }    
    }
    
    @media screen and (max-width: 430px) {
        align-self: flex-start;
        margin: 50% auto;
        padding: 5px 10px;
    }

    p {
        font-weight: 600;
        color: var(--white);
    }
`;
