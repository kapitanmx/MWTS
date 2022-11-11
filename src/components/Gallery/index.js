import React from 'react';
// Styled components
import {Wrapper} from './Gallery.styles';

const Gallery = ({images}) => (
    <Wrapper>
        {images.map(image => (
            <div>
                <img src={image.link} alt=""/>
            </div>
        ))}
    </Wrapper>
);

export default Gallery;