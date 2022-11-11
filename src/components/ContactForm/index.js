import React, {useState, useEffect} from 'react';
import { Wrapper, StyledField, FieldBox, StyledTextArea, StyledButton, ErrorMessage} from './ContactForm.styles';
// API
import API from '../../API';

const ContactForm = () => {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [nameInputError, setNameInputError] = useState(false);
    const [phoneInputError, setPhoneInputError] = useState(false);
    const [emailInputError, setEmailInputError] = useState(false);
    const [messageInputError, setMessageInputError] = useState(false);

    const fetchFormData = async (formData) => {
        try {
            setError(false);
            await API.fetchFormData(
                formData.name,
                formData.email,
                formData.message
            );
        } catch (error) {
            setError(true);
        }
    }

    const handleName = target => {
        if (target.value.length < 3){
            setNameInputError(true);
            return;
        }
        setNameInputError(false);
        setData(values => ({...values, [target.name] : target.value }))
        return;
    }

    const handlePhoneNumber = target => {
        if (typeof target.value !== "number") {
            setPhoneInputError(true);
            return;
        }
        setPhoneInputError(false);
        setData(values => ({...values, [target.name] : target.value }))
        return;
    }
    
    const handleEmail = target => {
        const mailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (target.value.match(mailRegEx) === null) {
            setEmailInputError(true);
            return;
        }
        setEmailInputError(false);
        setData(values => ({...values, [target.name] : target.value }))
        return;
    }

    const handleMessage = target => {
        if (target.value.length < 45) {
            setMessageInputError(true);
            return;
        }
        setMessageInputError(false);
        setData(values => ({...values, [target.name] : target.value }))
        return;
    }

    const handleSubmit = e => {
        e.preventDefault();
        // const token = captchaRef.current.getValue();
        if (!nameInputError && !emailInputError && !messageInputError) {
            fetchFormData(data); 
            return;
        }
        setError(true);
        return;
    }

    return (
        <Wrapper>
        <form onSubmit={handleSubmit}>
            <FieldBox>
                    <StyledField
                        type="text"
                        name="name"
                        placeholder="Imię i nazwisko"
                        required minlength="3"
                        onChange={(e) => handleName(e.target)}
                        error={nameInputError}
                    />
                    {/* {nameInputError ? <ErrorMessage>Pole musi zawierać co najmniej 3 znaki</ErrorMessage> : null} */}

                    <StyledField
                        type="email"
                        name="email"
                        placeholder="Email"
                        required minlength="3"
                        onChange={(e) => handleEmail(e.target)}
                        error={emailInputError}
                    />
                    {/* {emailInputError ? <ErrorMessage>Błędny adres e-mail</ErrorMessage> : null} */}
            </FieldBox>
            <StyledField
                type="phone"
                name="phone"
                placeholder="Telefon"
                required minlength="3"
                onChange={(e) => handlePhoneNumber(e.target)}
                error={phoneInputError}
            />
            {/* {emailInputError ? <ErrorMessage>Błędny format</ErrorMessage> : null} */}
            <StyledTextArea
                type="text"
                name="message"
                placeholder="Wiadomość..."
                required minlength="45"
                onChange={(e) => handleMessage(e.target)}
                error={messageInputError}
            />
            {/* {messageInputError ? <ErrorMessage>Wiadomość musi zawierać przynajmniej 45 znaków</ErrorMessage> : null} */}
            {/* <reCAPTCHA
                theme="dark"
                sitekey={process.env.REACT_APP_SITE_KEY}
            /> */}
            <StyledButton 
                onClick={handleSubmit}
                error={error}
            >Wyślij</StyledButton>
            {error ? <ErrorMessage>Nie można przesłać formularza</ErrorMessage> : null}
        </form>
    </Wrapper>
    );
}

export default ContactForm;