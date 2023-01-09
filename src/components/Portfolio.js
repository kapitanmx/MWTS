import React from 'react';
// Components
import SectionHero from './SectionHero';
import Gallery from './Gallery';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';  

AOS.init();

const Portfolio = ({title, imgs}) => {
    return (
        <>
            <SectionHero
                title={title}
                isButton={true}
                route='realizacje'
            />
            <Gallery id='realizacje'
                images={imgs}
            />
        </>

    );
}

export default Portfolio;