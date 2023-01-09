import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 40px;
    padding: 100px;
    margin: 50px auto;
    transition: all 1s;
    :hover {
        -webkit-box-shadow: 1px 1px 24px 0px rgba(66, 68, 90, 1);
        -moz-box-shadow: 1px 1px 24px 0px rgba(66, 68, 90, 1);
        box-shadow: 1px 1px 24px 0px rgba(66, 68, 90, 1);
    }
    @media screen and (max-width: 768px) {
        padding: 20px;
    }
    p {
        font-size: 1.8rem;
        @media screen and (max-width: 768px) {
            font-size: 1.3rem;
        }
    }
    h2 {
        align-self: center;
    }
    img {
        width: 20%;
        height: auto;
        align-self: center;
        @media screen and (max-width: 768px) {
            width: 50%;
        }
    }
    
`;