import React, {useState}from 'react'
import Video from '../../video/video.mp4'
import { Button } from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {

    const[hover, setHover] = useState(false);
    const onHover =() => {
        setHover(!hover)
    }
    return (
        <HeroContainer id = "home">
            <HeroBg>
                <VideoBg autoPlay loop muted src = {Video} type = 'video/mp4'/>
                </HeroBg>
                <HeroContent>
                    <HeroH1> Shipping Made Easy</HeroH1>
                    <HeroP>
                    Mos is dedicated to ensuring that your deliveries arrive on time and that you are always in the know when it comes to the status of your products. We partner exclusively with reputable shippers to guarantee quality service both over the phone and at the loading dock.
                        </HeroP>
                        <HeroBtnWrapper>
                            <Button to = "signup" 
                            onMouseEnter= {onHover}
                            onMouseLeave= {onHover}
                            smooth = {true}
                            duration = {500}
                            spy={true}
                            exact = "true"
                            offset= {-80}
                            primary ={primary ? 1 : 0}
                            dark = {dark ? 1 : 0}
                            dark2 = {dark2 ? 1 : 0}
                           
                            >
                                
                                Get started {hover ? <ArrowForward/>: <ArrowRight/>}
                            </Button>
                            </HeroBtnWrapper>
                    </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
