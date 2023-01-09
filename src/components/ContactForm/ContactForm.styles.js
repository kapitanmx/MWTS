import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    padding: 60px 20px;
    p {
        font-size: 0.8rem;
    }
`;

export const FieldBox = styled.div`
    display: flex;
    flex-direction: row;
    input {
        margin: 2px;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        input {
            margin: 5px 0;
        }
    }
`;

export const StyledField = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--lightGrey);
    width: 100%;
    margin: 5px auto;
    padding: 20px 40px;
    border-radius: 40px;
    border: ${({error}) => (error ? '3px solid red' : 'none')};
    outline: none;
`;

export const StyledTextArea = styled.textarea`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--lightGrey);
    margin: 10px auto;
    padding: 20px 20px;
    width: 100%;
    height: 70%;
    border: ${({error}) => (error ? '3px solid red' : 'none')};
    border-radius: 40px;
    outline: none;
`;

export const StyledButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: flex-start;
    cursor: pointer;
    font-weight: 300;
    margin: 30px;
    padding: 5px 50px;
    border-radius: 40px;
    background: transparent;
    transition: all 0.5s;
    border: ${({error}) => (error ? '2px solid red' : '2px solid black')};
    p {
        font-weight: 600;
    }
    :hover {
        background: var(--black);
        p {
            color: var(--white);
        }    
    }
    
    @media screen and (max-width: 430px) {
        align-self: flex-start;
        margin: 10% auto;
        padding: 10px 20px;
        p {
            font-weight: 500;
            font-size: 1rem;
            color: var(--white);
        }
    }
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 1rem !important;
    align-self: center;
`;
