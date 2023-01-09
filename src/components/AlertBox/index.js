import React, { useState } from 'react';
// Styles
import { Wrapper, Button } from './AlertBox.styles';

const AlertBox = ({text}) => {  
    const [open, setOpen] = useState(false);

    return (
        <Wrapper open={open}>
            <p>{text}</p>
            <div>
                <Button onClick={() => setOpen(!open)}>Akceptuj</Button>
                <Button onClick={() => setOpen(!open)}>Odrzuć</Button>
            </div>
        </Wrapper>
    )
};

export default AlertBox;