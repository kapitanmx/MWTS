import React from 'react';
// Components
import SectionHero from './SectionHero';
// Styles
import styled from 'styled-components';
import Plan from '../assets/plan.jpg';
import PlanMobile from '../assets/plan_mobile.svg';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';  
// Imgs
import AboutImg from '../assets/about_image.jpeg';
import { useEffect } from 'react';

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
    flex-direction: column;
    justify-content: center;
   
    margin: 0 auto;
    img {
        width: 100%;
        height: auto;
        border-radius: 40px;
        margin: 0 auto;
        padding: 20px;
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

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        margin: 20px auto;
        padding: 10px;
        img {
            width: 100%;
            margin: 0;
        }
        p {
            font-size: 1.3rem;
        }
    }
`;

const About = (
    {title1, 
    title2, 
    title3, 
    content, 
    content3,
}) => {
    return (
        <>
            <SectionHero
                title="O tym, kim jesteśmy i co robimy, słów kilka"
                isButton={true}
                route='studio'
            />
            <Wrapper id="studio">
                <Section id="st-section">
                    <div>
                        <h2 data-aos="fade-up">{title1}</h2>
                        {content.map(element => (
                            <>
                                <h3 data-aos="fade-up">{element.subtitle}</h3>
                                <p data-aos="fade-up">{element.text}</p>
                            </>
                        ))}
                    </div>
                </Section>
                <Section>
                    <div>
                        <h2 data-aos="fade-up">{title2}</h2>
                        <img data-aos="fade-up" src={window.innerWidth < 768 ? PlanMobile : Plan} alt="" />
                    </div>
                </Section>
                <Section>
                    <div>
                        <h2 data-aos="fade-up">{title3}</h2>
                        <p data-aos="fade-up">{content3}</p>
                    </div>
                </Section>
            </Wrapper>
        </>
    );
}

export default About;