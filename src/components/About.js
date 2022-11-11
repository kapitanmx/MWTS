import React from 'react';
// Components
import SectionHero from './SectionHero';
// Styles
import styled from 'styled-components';
import Plan from '../assets/plan.jpg';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';  
// Imgs
import AboutImg from '../assets/about_image.jpeg';

AOS.init();

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 20px 20px;
`;

const Section = styled.div`
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px 20px;
    margin: 50px auto;
    img {
        width: 50%;
        height: auto;
        border-radius: 40px;
        margin: 0 auto;
        padding: 20px;
    }
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        img {
            width: 100%;
            margin: 0;
        }
    }
    p {
        font-size: 1.8rem;
    }
    div {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        padding: 20px;
    }
`;

const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px 20px;
    img {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 40px 40px;
        width: 100%;
        height: auto;
        margin: 0 auto;
    }
`;

const About = () => {
    return (
        <>
            <SectionHero
                title="O tym, kim jesteśmy i co robimy, słów kilka"
                isButton={true}
            />
            <Wrapper>
                <Section>
                    <img data-aos="fade-up" src={AboutImg} alt=""/>
                    <div>
                        <h2 data-aos="fade-up">Słowem wstępu</h2>
                        <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum lobortis luctus libero.
                            Aliquam fringilla varius porta.
                            Donec rutrum purus nec lacinia semper.
                            Aliquam efficitur sodales porta.
                            Mauris pharetra tortor enim. 
                            Aliquam fringilla elit nec sollicitudin sollicitudin.
                            Nullam ac iaculis metus. 
                            Duis vitae ex et magna faucibus ultricies sit amet gravida lectus.
                            Quisque vel tortor nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                        </p>
                    </div>
                </Section>
                <Section>
                    <div>
                        <h2 data-aos="fade-up">Przykładowy przebieg zlecenia</h2>
                        <IconWrapper data-aos="fade-up">
                            <img src={Plan} alt="" />
                        </IconWrapper>
                    </div>
                </Section>
                <Section>
                    <div>
                        <h2 data-aos="fade-up">Wizja, misja oraz cele</h2>
                        <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum lobortis luctus libero.
                            Aliquam fringilla varius porta.
                            Donec rutrum purus nec lacinia semper.
                            Aliquam efficitur sodales porta.
                            Mauris pharetra tortor enim. 
                            Aliquam fringilla elit nec sollicitudin sollicitudin.
                            Nullam ac iaculis metus. 
                            Duis vitae ex et magna faucibus ultricies sit amet gravida lectus.
                            Quisque vel tortor nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                        </p>
                    </div>
                    <img data-aos="fade-up"src={AboutImg} alt=""/>
                </Section>
            </Wrapper>
        </>

    );
}

export default About;