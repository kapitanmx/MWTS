import React from 'react';
// Components
import Hero from '../components/Hero';
import View3D from './View3D';
// Styles
import styled from 'styled-components';
// Images
import Icon3D from '../assets/3d-icon.svg';
import IdeaIcon from '../assets/idea-icon.svg';
import SketchIcon from '../assets/sketch-icon.svg';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';  

AOS.init();

const Section = styled.div`
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 20px 20px;
    h2 {
        align-self: center;
    }
`;

const ButtonContainer = styled.div`
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


const Home = ({title1, title2}) => {
    return (
        <>
            <Hero/>
            <Section>
                <h2>{title1}</h2>
                <ButtonContainer>
                    <div>
                        <img src={Icon3D} alt=""/>
                        <h3>Druk 3D</h3>
                    </div>
                    <div>
                        <img src={IdeaIcon} alt=""/>
                        <h3>Realizacja potrzeb klienta</h3>
                    </div>
                    <div>
                        <img src={SketchIcon} alt=""/>
                        <h3>Projektowanie 3D</h3>
                    </div>
                </ButtonContainer>
                <h2>{title2}</h2>
            </Section>
            <View3D />
        </>
    );
}

export default Home;