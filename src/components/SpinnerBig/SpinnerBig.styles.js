import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 1;
    } 

    to {
        opacity: 0;
    }
`;

const width = `${window.innerWidth} px`;

export const Wrapper = styled.div`
    z-index: 4;
    padding: 40vh 0;
    display: flex;
    justify-content: center;
    background: black;
    width: ${width};
    height: 100%;
    animation: ${fadeIn} 1s linear;
`;

export const Spinner = styled.span`
    width: 200px;
    height: 200px;
    border: 8px solid;
    border-color: #fff transparent #fff transparent;
    border-radius: 50%;
    animation: ${rotate} 1s ease-in-out infinite;
`;