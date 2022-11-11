import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit,minmax(250px, 1fr));
    grid-auto-rows: 200px;
    grid-auto-flow: dense;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
        }
    }
`;
