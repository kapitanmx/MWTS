import styled, {keyframes} from 'styled-components';
import Cursor from '../../assets/cursor.svg';

const AnimateArrow = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50%);
    } to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    height: 100vh;
    background: linear-gradient(90deg, rgba(60,73,245,1) 0%, rgba(231,148,233,1) 100%);
    background-size: cover;
    cursor: url('../../assets/cursor.svg') 10 12;
    @media screen and (max-width: 768px) {
        margin: 0;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    margin: 20vh auto;
    padding: 20px 20px;
    h1 {
        color: var(--white);
    }
    h2 {
        align-self: flex-end;
        padding: 0 100px;
        color: var(--white);
    }
    @media screen and (max-width: 768px) {
        h2 {
        
            padding: 0;
        }
    }
`;

export const Img = styled.img`
    position: absolute;
    top: 20%;
    left: 20%;
    z-index: 0;
    width: 20%;
    height: auto;
    @media screen and (max-width: 768px) {
        width: 50%;
        left: 10%;
    }
`;

export const Button = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: flex-end;
    margin: 10px 100px;
    padding: 10px 100px;
    border-radius: 40px;
    background: transparent;
    border: 3px solid var(--white);
    p {
        color: var(--white);
    }
    @media screen and (max-width: 768px) {
        align-self: flex-start;
        margin: 10px 0;
        padding: 5px 20px;
    }
    img {
         display: none;
    }
    :hover {
        background: var(--white);
        p {
            color: var(--black);
        }
        img {
            display: block;
            animation: ${AnimateArrow} 0.5s ease-in-out;
            animation-fill-mode: forwards;
        }
        
    }
    p {
        margin: 20px 20px;
    }
    
`;


