import React from 'react';
// Components
import SectionHero from './SectionHero';
import ContactForm from './ContactForm';
// Styled Components
import styled from 'styled-components';
// Arrow Img
import ArrowImg from '../assets/arrow-contact.svg';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';  

AOS.init();

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 50px auto;
    padding: 20px 20px;
`;

const Section = styled.div`
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    padding: 20px;
    h2 {
        padding: 20px;
    }
    p {
        padding: 20px;
    }
    @media screen and (max-width: 768px) {
        margin: 60px auto;
    }
    p {
        font-size: 2rem;
        @media screen and (max-width: 768px) {
            font-size: 1.5rem;
        }
    }
    h2 {
        @media screen and (max-width: 768px) {
            margin: 0;
        }
    }
`;

const Contact = () => {
    return (
        <>
            <SectionHero
                title="Skontaktuj się z nami"
                isButton={true}
                route='kontakt'
            />
            <Wrapper data-aos="fade-up" id="kontakt">
                <Section>
                    <h2 data-aos="fade-up">Formularz kontaktowy</h2>
                    <ContactForm data-aos="fade-up"/>
                </Section>
                <Section>
                    <h2 data-aos="fade-up">Dane kontaktowe</h2>
                    <div data-aos="fade-up">
                        <p>Adres e-mail: kontakt@mwts.pl</p>
                        <p>Telefon: +48 664 412 219</p>
                    </div>
                </Section>
            </Wrapper>
        </>
    );
}

export default Contact;