import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --black: #000;
        --lightGrey: #D9D9D9;
        --medGrey: #414141;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
        scroll-behavior: smooth; 
    }

    body {
        margin: 0;
        padding: 0;

        h1 {
            font-size: 6rem;
            font-weight: 400;
            color: var(--black);
            @media screen and (max-width: 1024px) {
                font-size: 4rem;
            }
            @media screen and (max-width: 768px) {
                font-size: 3.4rem;
            }
        }

        h2 {
            font-size: 3rem;
            @media screen and (max-width: 1024px) {
                font-size: 2.5rem;
            }
        }

        h3 {
            font-size: 1.6rem;
            font-weight: 600;
        }

        p {
            font-size: 1.1rem;
            color: var(--black);
            font-weight: 400;
        }

        a {
            text-decoration: none;
            color: var(--white);
        }
    }

`;