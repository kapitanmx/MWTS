import React from 'react';
import { Wrapper } from './OfferCard.styles';

const OfferCard = ({title, img, text}) => (
    <Wrapper>
        <h2>{title}</h2>
        <img src={img} alt=''/>
        <p>{text}</p>
    </Wrapper>
);

export default OfferCard;