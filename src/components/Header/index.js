import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/logo.svg';
import LogoImgWhite from '../../assets/logo-white.svg';
import { Wrapper, Content, Logo, LinkButton, MobileMenu, Burger, Icon } from './Header.styles';

const Header = ({links}) => {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    let navHideStyle = ''

    useEffect(() => {
        window.addEventListener('scroll', () => {
            var lastScrollTop = 0;
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                navHideStyle = 'translateY(-100%)';
                return;
            }
            navHideStyle = 'translateY(0)';
            lastScrollTop = st;
            return;
        }, false);
        window.removeEventListener('scroll', () => {return;});
    }, []);


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 50) {
                setIsScrolled(true);
                return;
            }
            setIsScrolled(false);
            return;
        });
        window.removeEventListener('scroll', () => {return;});
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Wrapper isScrolled={isScrolled} hide={navHideStyle}>
            <Logo src={isScrolled ? LogoImg : LogoImgWhite} href="/"/>
            <Content>
                {links.map(link => (
                    <Link to={`/${link.toLowerCase()}`}>
                        <LinkButton isScrolled={isScrolled} onClick={goToTop}>
                            {link}
                        </LinkButton>
                    </Link>
                ))}
            </Content>
            <Burger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </Burger>
            <MobileMenu open={open} setOpen={open}>
                {links.map(link => (
                    <Link to={`/${link.toLowerCase()}`}>
                        <LinkButton onClick={() => setOpen(!open)}>
                            {link}
                        </LinkButton>
                    </Link>
                ))}
                <Icon />
                <Icon />
                <Icon /> 
            </MobileMenu>
        </Wrapper>
    );
}

export default Header;