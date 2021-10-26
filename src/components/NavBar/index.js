import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavBarElements';

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

    const img = {
        img: require('../../images/mosfreight-logodesign2.svg').default,
    }

    return (
       <>
       <IconContext.Provider value = {{color: '#fff'}}>
       <Nav scrollNav = {scrollNav}>
           <NavBarContainer>
                <NavLogo to='/' onClick= {toggleHome} > MOS freight</NavLogo>
                <MobileIcon onClick={toggle}>
                <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks 
                        to ='About'
                       smooth={true} 
                       duration={500} 
                       spy={true} 
                       exact='true' 
                       offset={-80} 
                       >
                           About</NavLinks>
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
                    <NavItem>
                        <NavLinks to ='Signup'
                       smooth={true} 
                       duration={500} 
                       spy={true} 
                       exact='true' 
                       offset={-80} >Sign Up</NavLinks>
                    </NavItem>
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
