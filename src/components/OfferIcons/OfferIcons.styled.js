import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 50px auto;
    padding: 20px 20px;
    border-bottom: 2px solid var(--black);
    div {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        border-radius: 150px;
        margin: 0 30px;
    }
    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`;