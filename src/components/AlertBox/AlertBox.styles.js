import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    position: fixed;
    display: flex;
    z-index: 10;
    flex-direction: column;
    background: var(--white);
    justify-content: center;
    margin: 0 auto;
    padding: 30px;
    border-radius: 20px;
    border: 1px solid var(--black);
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px;
    }
`;

export const Button = styled.button`
    border-radius: 20px;
    border: 1px solid var(--black);
    padding: 20px;
    margin: 0 auto;
`;