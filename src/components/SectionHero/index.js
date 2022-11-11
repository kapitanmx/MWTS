import React, {useState, useEffect} from 'react';
// Styled components
import { Wrapper, Content, Cube, Button, PricingLink } from './SectionHero.styles';
// Imgs
import CubeImg from '../../assets/cube.svg';
import ArrowDown from '../../assets/arrow-down.svg';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';  

AOS.init();

const SectionHero = ({title, isButton, isSubtitle, subtitle}) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
            return;
        }
        setIsMobile(false);
        return;
    }, [])

    return (
        <Wrapper isButton={isButton}>
            <Cube data-aos="fade-in" data-aos-duration="2000" src={CubeImg} alt=""/>
            <Content>
                <h1 data-aos={isMobile ? ("fade-in") : ("fade-left")} data-aos-duration="3000">{title}</h1>
                <Cube data-aos="fade-in" data-aos-duration="2000" src={CubeImg} alt=""/>
                <PricingLink>Bezpłatna wycena</PricingLink>
                {isSubtitle ? (
                    <h2>{subtitle}</h2>
                ) : null}
                {isButton ? (
                    <Button data-aos={isMobile ? "fade-in" : "fade-left"} data-aos-duration="2000">
                        <p>Sprawdź szczegóły</p>
                    </Button>
                ) : null
                }
            </Content>
        </Wrapper>
    );
}

export default SectionHero;