import React from 'react';

// Components
import Grid from './Grid';
import Thumb from './Thumb';
import SearchBar from './SearchBar';
import SectionHero from './SectionHero';
import Spinner from './Spinner';
import Button from './Button';

// Styled-components
import styled from 'styled-components';

// Hooks
import { useProductFetch } from './Hooks/useProductFetch';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Marketplace = ({products}) => {
    // const {
    //     state,
    //     loading,
    //     error,
    //     searchTerm,
    //     setSearchTerm,
    //     setIsLoadingMore
    // } = useProductFetch();

    // if (error) return (
    //     <>
    //         <SectionHero
    //             title="Nasze produkty"
    //             isButton={true}
    //             route='sklep'
    //         />
    //         <div>Coś poszło nie tak...</div>
    //     </>
    // );

    return (
        <>
            <SectionHero
                title="Nasze produkty"
                isButton={true}
                route='sklep'
            />
            <Wrapper id="sklep">
                {/* <SearchBar setSearchTerm={setSearchTerm}/> */}
                {/* <Grid title={searchTerm ? 'Wyniki wyszukiwania' : 'Produkty marki własnej'}>
                    {state.results.map(product => (
                        <Thumb
                            key={product.id}
                            title={product.name}
                            desc={product.desc}
                            img={product.img}
                        />
                    ))
                }
                </Grid>
                {loading ? <Spinner /> : null}
                {state.page < state.total_pages && !loading && (
                    <Button text='Pokaż Więcej' callback={() => setIsLoadingMore(true)}/>
                )} */}
                <Grid title='Produkty marki własnej'>
                    {products.map((product, index) => (
                        <Thumb 
                            key={index}
                            title={product.name}
                            desc={product.description}
                            price={product.price}
                            img={product.img}
                            link={product.link}
                        />
                    ))}
                </Grid>
            </Wrapper>
        </>
    );
};

export default Marketplace;