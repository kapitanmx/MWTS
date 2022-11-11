import React from 'react';
// Components
import SectionHero from './SectionHero';
// Styles
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';  
// Images
import Icon3D from '../assets/3d-icon.svg';
import IdeaIcon from '../assets/idea-icon.svg';
import SketchIcon from '../assets/sketch-icon.svg';

AOS.init();

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 20px 20px;
`;

const Section = styled.div`
    -webkit-box-shadow: 1px 1px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 1px 1px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: 1px 1px 24px 0px rgba(66, 68, 90, 1);
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 40px;
    padding: 100px;
    margin: 50px auto;
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

const Offer = () => {
    const location = useLocation();
    console.log(location.pathname)
    return (
        <>
            <SectionHero
                title="Oto, co możemy tobie zaoferować"
                isButton={true}
            />
            <Wrapper>
                <Section data-aos="fade-up">
                    <h2>Druk 3D</h2>
                    <img src={Icon3D} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                </Section>
                <Section data-aos="fade-up">
                    <h2>Realizacja indywidualnych projektów</h2>
                    <img src={IdeaIcon} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                </Section>
                <Section data-aos="fade-up">
                    <h2>Projektowanie komponentów, makiet oraz wizualizacji 3D</h2>
                    <img src={SketchIcon} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                </Section>
            </Wrapper>
        </>
    );
}

export default Offer;