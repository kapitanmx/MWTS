import React from 'react';
// Components
import SectionHero from './SectionHero';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';  

AOS.init();

const NotFound = () => {
    return (
        <SectionHero
            title="Błąd 404. Strona nie istnieje."
        />
    );
}

export default NotFound;