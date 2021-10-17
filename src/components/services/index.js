import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './servicesElements'
import Icon1 from '../../images/svgdelivery.svg'
import Icon2 from '../../images/svgtracking.svg'
import Icon3 from '../../images/svglogistics.svg'
const services = () => {
    return (
        <ServicesContainer id = "services">
            <ServicesH1> Our Services </ServicesH1>
            <ServicesWrapper>
                 <ServicesCard>
                     <ServicesIcon src ={Icon1}/>
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>We help reducee your fees and increase your overall revenue.</ServicesP>
                 </ServicesCard>
                 <ServicesCard>
                     <ServicesIcon src ={Icon2}/>
                        <ServicesH2>Logistics of the Future</ServicesH2>
                        <ServicesP>You can access our platform anywhere online in the world!</ServicesP>
                 </ServicesCard>
                 <ServicesCard>
                     <ServicesIcon src ={Icon3}/>
                        <ServicesH2>Timely Delivey</ServicesH2>
                        <ServicesP>MOS is dedicated to fulfilling all of your shipping needs on time.</ServicesP>
                 </ServicesCard>
                 </ServicesWrapper>
        </ServicesContainer>
    )
}

export default services
