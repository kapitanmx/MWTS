import React from "react";
import Button from "../Button";
// Styles
import { Wrapper, Content } from './Thumb.styles';

const Thumb = ({title, desc, price, img, link}) => ( 
    <Wrapper>
        <Content>
            <img src={img} alt=''/>
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <h4>{price}</h4>
            </div>
            <Button text='Sprawdź' link={link} />
        </Content>
    </Wrapper>
);

export default Thumb;