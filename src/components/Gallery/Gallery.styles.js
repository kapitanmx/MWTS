import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 200px;
    grid-auto-flow: dense;
    margin: 0 auto;
    padding: 60px;
    .wide {
        grid-column: span 2;
    }
    .tall {
        grid-row: span 2;
    }
    div {
        position: relative;
        overflow: hidden;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        :after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: #e5e5e5;
            opacity: 0;
            transition: .5s ease all;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            align-self: center;
            border-radius: 15px;
            transition: .5s ease all;
            &:hover{
                transform: scale(1.1);
            }
        }
        &:hover:after {
            opacity: 0.3; 
            border-radius: 15px; 
            background-color: rgba(0, 0, 0, 1);
        }
    }
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        padding: 20px;
    }

`;

export const ImageContainer = styled.div`
    display: ${({open}) => open ? "block" : "none"};
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
    opacity: 0.3; 
    background-color: rgba(0, 0, 0, 1);
    img {
        width: 100%;
        height: auto;
        align-self: center;
    }
`;
