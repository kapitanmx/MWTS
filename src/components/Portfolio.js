import React from 'react';
// Components
import SectionHero from './SectionHero';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';  

AOS.init();

const Portfolio = ({title}) => {
    return (
        <SectionHero
            title="Zobacz nasze realizacje"
            isButton={true}
        />
    );
}

export default Portfolio;