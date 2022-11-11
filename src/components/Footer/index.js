import React from 'react';
// Images
import LogoImg from '../../assets/logo-grey.svg';
import FacebookIcon from '../../assets/facebook-logo.svg';
import InstaIcon from '../../assets/instagram-logo.svg';
import WhatsAppIcon from '../../assets/whatsapp-logo.svg';
// Styled Components
import { Wrapper, Content, IconContainer, Logo, ContactButton, ContactContainer, TextContainer, FooterEnd} from './Footer.styles';

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
                        <img src={FacebookIcon} alt=""/>
                        <img src={InstaIcon} alt=""/>
                        <img src={WhatsAppIcon} alt=""/>
                    </IconContainer>
                    <ContactButton>
                        <p>Skontaktuj się z nami</p>
                    </ContactButton>
                </ContactContainer>
                <TextContainer>
                    <div>
                        <h3>Dane kontaktowe:</h3>
                        <p>
                            Telefon: +48 111 111 111<br/><br/>
                            E-mail: kontakt@mwts.pl<br/><br/>
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

