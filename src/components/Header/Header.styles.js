import styled from 'styled-components'

export const Wrapper = styled.div`
    -webkit-box-shadow: ${({isScrolled}) => isScrolled ? '1px 1px 24px 0px rgba(66, 68, 90, 1)' : 'none'};
    -moz-box-shadow: ${({isScrolled}) => isScrolled ? '1px 1px 24px 0px rgba(66, 68, 90, 1)' : 'none'};
    box-shadow: ${({isScrolled}) => isScrolled ? '1px 1px 24px 0px rgba(66, 68, 90, 1)' : 'none'};
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    z-index: 5;
    background: ${({isScrolled}) => isScrolled ? 'white' : 'transparent'};
    /* transform: ${({isScrolledDown}) => isScrolledDown ? 'translateY(-100%)' : 'translateY(0)'};
    animation-timing-function: ease-in-out;
    animation-duration: 2s; */
    margin: 0 auto;
    padding: 5px;
    &:before, :after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }
`;

export const Content = styled.div`
    width: 40%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 40px auto;
    a {
        text-decoration: none;
        color: var(--black);
    }
    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const LinkButton = styled.div`
    color: ${({isScrolled}) => isScrolled ? '#000' : 'white'};
    @media screen and (max-width: 900px) {
        color: var(--white);
        align-self: left;
    }
`;

export const Logo = styled.img`
    display: flex;
    flex-direction: row;
    align-self: left;
    margin: 0 auto;
    width: ${({isScrolled}) => isScrolled ? '10%' : '20%'};
    height: auto;
    @media screen and (max-width: 768px) {
        width: 50%;
        margin: 0;
    }

`;

export const MobileMenu = styled.div`
    display: none;
    flex-direction: column;
    justify-content: center;
    background: #5047B5;
    color: white;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
    padding: 20rem 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    width: 100%;
    @media screen and (max-width: 900px) {
        display: flex;
    }

    a {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: #0D0C1D;
        text-decoration: none;
        transition: color 0.3s linear;
    }

    &:hover {
      color: #343078;
    }
`;

export const Burger = styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    margin: 10px 10px;
    padding: 0;
    z-index: 5;

    @media screen and (max-width: 900px) {
        display: flex;
    }

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.20rem;
        background: ${({ open }) => open ? 'white' : 'black'};
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

    :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const Icon = styled.img`
    width: 100%;
    height: auto;
`;
