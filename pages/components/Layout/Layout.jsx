import React from 'react'
import AppleAirPlaySection from '../AppleOneSection/AppleAirPlaySection'
import AppleMusicSection from '../AppleOneSection/AppleMusicSection'
import AppleOneSection from '../AppleOneSection/AppleOneSection'
import AppleTvSection from '../AppleOneSection/AppleTvSection'
import AppleShowSection from '../AppleShowSection/AppleShowSection'
import AppleTvAppSection from '../AppleTvAppSection/AppleTvAppSection'
import CtaButton from '../Buttons/CtaButton'
import FaqSection from '../FaqSection/FaqSection'
import HeroSection from '../HeroSection/HeroSection'
import MainNavbar from '../Navbar/MainNavbar'
import StickyCta from '../Navbar/StickyCta'
import Wrapper from '../Wrapper'

const Layout = () => {
    return (
        <div>
            <MainNavbar />
            <StickyCta />
            <CtaButton />
            <HeroSection />
            <AppleShowSection />
            <Wrapper>
                <AppleTvAppSection />
                <FaqSection />
            </Wrapper>
            <div className="lg:w-[692px] lg:mx-auto xl:w-auto xl:mx-[19px] 2xl:w-[97%] 2xl:max-w-[1360px] 2xl:mx-auto">
                <AppleOneSection />
                <AppleMusicSection />
                <AppleTvSection />
                <AppleAirPlaySection />
            </div>
            <div className="h-screen w-full"></div>
        </div>
    )
}

export default Layout
