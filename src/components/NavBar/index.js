import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav ,NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavItemAsLink, NavItemAsLinkCert} from './NavBarElements';

const NavBar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
       <>
       <IconContext.Provider value = {{color: '#fff'}}>
       <Nav scrollNav = {scrollNav}>
           <NavBarContainer>
           <NavLogo><img src = {require('../../images/mos-chrome.svg').default} 
                     alt= "MOS" 
                    to='/' 
                    onClick={toggleHome} 
                    height={150} 
                    width={150} />
                </NavLogo>
                <MobileIcon onClick={toggle}>
                <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavItem>
                        <NavLinks 
                        to ='About'
                       smooth={true} 
                       duration={500} 
                       spy={true} 
                       exact='true' 
                       offset={-80} >About</NavLinks>
                       </NavItem>
                    </NavItem>
                    <NavItem>
                        <NavLinks  to ='Discover'
                       smooth={true} 
                       duration={500} 
                       spy={true} 
                       exact='true' 
                       offset={-80} >Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks  to ='services'
                       smooth={true} 
                       duration={500} 
                       spy={true} 
                       exact='true' 
                       offset={-80} >Services</NavLinks>
                    </NavItem>
                    <NavItemAsLink>
                    <NavItemAsLinkCert  to ='certificate'
                       smooth={true} 
                       duration={500} 
                       spy={true} 
                       exact='true' 
                       offset={-80} > Certification </NavItemAsLinkCert>
                </NavItemAsLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink  to ='signin'
                       smooth={true} 
                       duration={500} 
                       spy={true} 
                       exact='true' 
                       offset={-80} > Sign In</NavBtnLink>
                </NavBtn>
           </NavBarContainer>
       </Nav>
       </IconContext.Provider>
       </>
    );
};

export default NavBar;
