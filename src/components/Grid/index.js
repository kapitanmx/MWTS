import React from 'react';
import { Wrapper, Content } from './Grid.styles';

const Grid = ({title, children}) => (
    <Wrapper>
        <h2>{title}</h2>
        <Content>
            {children}
        </Content>
    </Wrapper>
);

export default Grid;