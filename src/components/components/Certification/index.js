import React from 'react'
import {Container, Icon,  Form,CertificateIcon} from './certificationElements'
import Footer from '../Footer'
import { animateScroll as scroll } from 'react-scroll';
//import NavBar from '../components/NavBar';
const Certification = () => {
    
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    
    return (
        <>
        <Container >
       
        <Icon to='/'> <img src = {require('../../images/mos-chrome.svg').default} alt= "MOS" to='/'
        onClick={toggleHome} height={150} width={150} /></Icon>
            <Form>
            <CertificateIcon src = {require('../../images/Surety Bond.svg').default}/>
            </Form>
            <Form>
            <CertificateIcon src = {require('../../images/Authority-_1_.svg').default}/>
            </Form>
            <Form>
            <CertificateIcon src = {require('../../images/ope-_1_.svg').default}/>
            </Form>
            <Footer/>
        </Container>
        </>
    )
}

export default Certification;