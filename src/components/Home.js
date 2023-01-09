import React from 'react';
// Components
import Hero from '../components/Hero';
import OfferIcons from './OfferIcons';
import SpinnerBig from './SpinnerBig';
import View3D from './View3D';
import Product from './Product';
import ProductCarousel, { CarouselItem } from './ProductCarousel';
// Hooks
import Loading from './Hooks/loading';
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

const Home = ({title1, title2, products, offers}) => {

    if (Loading()) {
        return <SpinnerBig />
    } else {
        return (
            <>
                <Hero/>
                <Section>
                    <h2>{title1}</h2>
                    <OfferIcons offers={offers}/>
                    {/* <h2>{title2}</h2>
                    <ProductCarousel>
                        {products.map(product => (
                            <CarouselItem>
                                <Product
                                    name={product.name}
                                    description={product.description}
                                    img={product.img}
                                    link={product.link}
                                />
                            </CarouselItem>
                        ))}
                    </ProductCarousel> */}
                </Section>
                {/* <View3D /> */}
            </>
        );
    }
}

export default Home;