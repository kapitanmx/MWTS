import React from "react";
import { Wrapper } from './OfferIcons.styled';

const OfferIcons = ({offers}) => (
    <Wrapper>
        {offers.map(offer => (
            <div>
                <img src={offer.img} alt=''/>
                <h3>{offer.title}</h3>
            </div>
        ))}
    </Wrapper>
);

export default OfferIcons;