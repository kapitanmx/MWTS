import React from 'react'
import { Wrapper, Content } from './Product.styles';

const Product = ({name, description, img, link}) => (
    <Wrapper>
        <Content>
            <img src={img} alt='' />
            <div>
                <h3>{name}</h3>
                <a href={link}>Link</a>
            </div>
        </Content>
    </Wrapper>
)

export default Product;