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

const Layout = () => {
    return (
        <div>
            <MainNavbar />
            <StickyCta />
            <CtaButton />
            <HeroSection />
            <AppleShowSection />
            <AppleTvAppSection />
            <FaqSection />
            <AppleOneSection />
            <AppleMusicSection />
            <AppleTvSection />
            <AppleAirPlaySection />
            <div className="h-screen w-full"></div>
        </div>
    )
}

export default Layout
