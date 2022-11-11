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
    background: var(--lightGrey);
    color: #000
    flex-direction: column;
    justify-content: center;
    margin: 10px auto;
    padding: 20px 40px;
    border-radius: 40px;
    border: ${({error}) => (error ? '3px solid red' : '3px solid black')};
    text-decoration: none;
    outline: none;
    transition: 0.5s ease-in-out;
    /* &:hover {
        background-color: #000;
        color: white;
        border: 3px solid white; */
} 
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 1rem;
`;
