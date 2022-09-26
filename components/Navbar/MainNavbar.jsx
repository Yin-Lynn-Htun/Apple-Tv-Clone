/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import Wrapper from '../Wrapper'

const MainNavbar = () => {
    return (
        <>
            <div className="flex lg:hidden bg-black justify-between text-white w-full h-12 items-center px-4">
                <div>
                    <AiOutlineMenu />
                </div>
                <div>
                    <img
                        width={17}
                        src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
                        alt="logo"
                    />
                </div>
                <div>
                    <img
                        width={15}
                        src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg"
                        alt="cart"
                    />
                </div>
            </div>

            <div className="hidden lg:flex px-4  justify-between h-[48px] bg-black">
                <ul className="xl:max-w-[980px] lg:mx-auto flex justify-between text-[#f5f5f7] items-center w-full text-xs px-[22px]">
                    <div>
                        <img
                            width={17}
                            src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
                            alt="logo"
                        />
                    </div>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Watch</li>
                    <li>AirPods</li>
                    <li>TV {'&'} Home</li>
                    <li>Only on Apple</li>
                    <li>Accessories</li>
                    <li>Support</li>
                    <AiOutlineSearch className="text-[#f5f5f7] w-[31px] h-[22px]" />
                    <div>
                        <img
                            width={15}
                            src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg"
                            alt="cart"
                        />
                    </div>
                </ul>
            </div>
        </>
    )
}

export default MainNavbar
