import React from 'react';
// Images
import LogoImg from '../../assets/logo-grey.svg';
import FacebookIcon from '../../assets/facebook-logo.svg';
import InstaIcon from '../../assets/instagram-logo.svg';
import WhatsAppIcon from '../../assets/whatsapp-logo.svg';
// Components
import Button from '../Button';
// Styles
import { Wrapper, Content, IconContainer, Logo, ContactContainer, TextContainer, FooterEnd} from './Footer.styles';

const Footer = () => {
    const currentYear = () => {
        const year = new Date().getFullYear();
        return year.toString();
    }
    return (
        <Wrapper>
            <Logo src={LogoImg} alt=""/>
            <Content>
                <ContactContainer>
                    <IconContainer>
                        <a href="https://www.facebook.com/mwtstudio"><img src={FacebookIcon} alt=""/></a>
                        <a href="https://www.instagram.com/mwts_studio/"><img src={InstaIcon} alt=""/></a>
                        <a href=""><img src={WhatsAppIcon} alt=""/></a>
                    </IconContainer>
                    <a href="/kontakt"><Button isPrimary={true} text='Skontaktuj się z nami'/></a>
                </ContactContainer>
                <TextContainer>
                    <div>
                        <h3>Dane kontaktowe:</h3>
                        <p>
                            Telefon: +48 664 412 219<br/><br/>
                            E-mail: <a href="mailto:kontakt@mwts.pl">kontakt@mwts.pl</a><br/><br/>
                        </p>
                    </div>
                    <div>
                        <h3>Informacje dodatkowe:</h3>
                        <p>
                            Polityka RODO<br/><br/>
                            Dokumenty<br/><br/>
                        </p>
                    </div>
                </TextContainer>
            </Content>
            <FooterEnd>
                <p>© {currentYear()} MWTS Studio</p>
            </FooterEnd>
        </Wrapper>
    );
}

export default Footer;

