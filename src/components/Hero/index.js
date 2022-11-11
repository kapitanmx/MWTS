import React from 'react';
import { Wrapper, Content, Img, Button} from './Hero.styles';
import Ellipse from '../../assets/Ellipse1.svg';
import Arrow from '../../assets/arrow.svg';

const Hero = () => (
    <Wrapper>
        <Img src={Ellipse}/>
        <Content>
            <h1>Kompleksowe usługi druku 3D</h1>
            <h2>Dla firm oraz osób indywidualnych</h2>
            <Button>
                <p>Sprawdź szczegóły</p>
                <img src={Arrow} alt="->"/>
            </Button>
        </Content>
    </Wrapper>
);

export default Hero;