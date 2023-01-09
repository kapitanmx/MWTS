import React from 'react';
// Components
import SectionHero from './SectionHero';
import OfferCard from './OfferCard';
// Styles
import styled from 'styled-components';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';  

AOS.init();

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 20px 20px;
`;

const Offer = ({offers}) => {
    return (
        <>
            <SectionHero
                title="Oto, co możemy tobie zaoferować"
                isButton={true}
                route='oferta'
            />
            <Wrapper id="oferta">
                {offers.map(offer => (
                    <OfferCard
                        title={offer.title}
                        img={offer.img}
                        text={offer.text}
                    />
                ))}
            </Wrapper>
        </>
    );
}

export default Offer;