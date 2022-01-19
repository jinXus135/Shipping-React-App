import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';
import { FooterContainer, FooterWrap, 
SocialMedia, SocialMediaWrap, SocialIcon, SocialLogo, SocialIconLink, WebsiteRights   } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to = '/'>
                            MOS
                        </SocialLogo>
                        <WebsiteRights>
                            MOS © {new Date().getFullYear()}
                            All Rights Reserved.
                        </WebsiteRights>  
                        <SocialIcon>
                            <SocialIconLink href = "//www.instagram.com/mosfreightbrokerage/" target = "_blank"
                            aria-label = "Instagram"> <FaInstagram/> </SocialIconLink>
                        </SocialIcon>  
                        <SocialIcon>
                            <SocialIconLink href = "//twitter.com/mosfreightLLC" target = "_blank"
                            aria-label = "Twitter"> <FaTwitter/> </SocialIconLink>
                        </SocialIcon>  
                        <SocialIcon>
                            <SocialIconLink href = "//www.linkedin.com/in/mos-freight-brokerage-7b7094218/" target = "_blank"
                            aria-label = "LinkedIn"> <FaLinkedin/> </SocialIconLink>
                        </SocialIcon>  
                    </SocialMediaWrap>    
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
