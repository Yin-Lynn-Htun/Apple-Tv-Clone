/* eslint-disable @next/next/no-img-element */
import React from 'react'

const MainNavbar = () => {
    return (
        <div className="bg-black flex justify-between text-white w-full h-12 items-center px-4">
            <div>---</div>
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
    )
}

export default MainNavbar
