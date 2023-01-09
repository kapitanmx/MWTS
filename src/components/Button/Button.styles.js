import styled from 'styled-components';

export const Wrapper = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: flex-start;
    cursor: pointer;
    font-weight: 300;
    margin: 30px;
    padding: 5px 50px;
    border: ${props => props.theme.border};
    border-radius: 40px;
    background: ${props => props.theme.background};
    transition: all 0.5s;
    p {
        font-weight: 600;
        color: ${props => props.theme.color};
    }
    :hover {
        background: ${props => props.theme.hover.background};
        p {
            color: ${props => props.theme.hover.color};
        }    
    }
    
    @media screen and (max-width: 430px) {
        margin: 30px auto;
        p {
            font-size: 1rem;
        }
    }
`;