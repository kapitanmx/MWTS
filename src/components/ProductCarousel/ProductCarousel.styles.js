import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 20px;
    overflow: hidden;
`;

export const Content = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 250px;
    width: 300px;
`;

export const Inner = styled.div`
    white-space: nowrap;
    transition: transform 0.3s;
`;

export const Indicators = styled.div`
    display: flex;
    justify-content: center;
    button {
        margin: 5px;
        :active {
            background-color: var(--darkGrey);
            color: var(--white);
        }
    }
`;
