import React, {useState} from "react";
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = () => {
    const [value, setValue] = useState(''); 
    return (
        <Wrapper>
            <Content>
                <input
                    type='text'
                    placeholder='Wyszukaj produkt...'
                    onChange={e => setValue(e.target)}
                    value={value}
                />
            </Content>
        </Wrapper>
    );
}

export default SearchBar;