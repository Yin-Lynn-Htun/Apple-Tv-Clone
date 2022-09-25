import React from 'react'
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
            <AppleTvAppSection />
            <FaqSection />
        </div>
    )
}

export default Layout
