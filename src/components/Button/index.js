import React from 'react';
// Styles
import { Wrapper } from './Button.styles';

const Button = ({ text, link, isPrimary }) => {
    const theme = {
        primary : {
            color : "white",
            background : "transparent",
            border : "2px solid white",
            hover : {
                background: "white",
                color : "black",
            }

        },
        secondary : {
            color : "black",
            background: "white",
            border : "2px solid black",
            hover : {
                background: "black",
                color : "white",
            }
        }
    }
    return (
        <Wrapper 
            type="button" 
            theme={isPrimary ? theme.primary : theme.secondary} 
        >
            <a href={link}>
                <p>{text}</p>
            </a>
        </Wrapper>
    )
};

export default Button;