import React, {useState} from 'react';
import Sidebar from '../components/SideBar';
import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/services';
import Footer from '../components/Footer';
import {Helmet} from "react-helmet";
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };
    return (
        <div>
        <Helmet>
        
        </Helmet>
          <Sidebar isOpen={isOpen} toggle= {toggle}/>
          <Navbar toggle={toggle}/>  
          <HeroSection/>
          <InfoSection{...homeObjOne}/>
          <InfoSection{...homeObjTwo}/>
          <Services/>
          <InfoSection{...homeObjThree}/>
          <Footer/>
          
        </div>
    )
}

export default Home
