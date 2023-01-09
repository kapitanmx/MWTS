import React, { useState } from 'react';
// Styled components
import {Wrapper, ImageContainer } from './Gallery.styles';

const Gallery = ({images}) => {

    const [open, setOpen] = useState(false);
    const [image, setImage] = useState("");

    const imageHandler = (target, isOpen) => {
        setOpen(isOpen);
        setImage(target.src);
    }
    
    return (
        <>
            <Wrapper>
                {images.map(image => {
                    if (image.id % 2) {
                        return (<div className='wide'>
                            <img src={image.link} alt="" onClick={(e) => imageHandler(e.target, true)}/>
                        </div>)
                    }
                    return (
                        <div className='tall'>
                            <img src={image.link} alt="" onClick={(e) => imageHandler(e.target, true)}/>
                        </div>
                    )
                })}
            </Wrapper> 
            <ImageContainer open={open}>
                <img src={image} alt="" />
            </ImageContainer>
        </>
    )
};

export default Gallery;