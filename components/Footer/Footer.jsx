import React from 'react'
import Wrapper from '../Wrapper'

const Footer = () => {
    return (
        <div className="w-full bg-[#f5f5f7] mt-10 pb-10">
            <Wrapper>
                <section
                    class="text-[12px] py-5 text-[#6e6e73] border-b-[1px] border-[#d2d2d7]"
                    aria-label="Footnotes"
                >
                    <ul className="pb-[10px]">
                        <li className="pb-[10px]">
                            <small>*</small> The Apple&nbsp;One free trial
                            includes only services that you are not currently
                            using through a free trial or a subscription. Plan
                            automatically renews after trial until cancelled.
                            Restrictions and other terms apply.
                        </li>
                    </ul>
                    <ol className="list-decimal ml-5">
                        <li className="pb-[10px]">
                            $4.99/month after free trial. Only one offer per
                            Apple&nbsp;ID and only one offer per family if
                            you’re part of a Family&nbsp;Sharing group,
                            regardless of the number of devices you or your
                            family purchases. This offer is not available if you
                            or your Family have previously accepted an
                            Apple&nbsp;TV+ one year free offer. Offer good for 3
                            months after eligible device activation. Plan
                            automatically renews until cancelled. Restrictions
                            and other <a href="/promo/">terms</a> apply.
                        </li>
                        <li className="pb-[10px]">
                            One subscription per Family&nbsp;Sharing group. Plan
                            automatically renews until cancelled.
                        </li>
                        <li className="pb-[10px]">
                            Limited-time offer; offer may end at any time. Free
                            Apple&nbsp;TV+ access for students ends when you no
                            longer qualify or do not renew your Apple&nbsp;Music
                            Student subscription. Offer good for verified
                            college students only and does not extend to a
                            Family&nbsp;Sharing group.
                        </li>
                    </ol>
                </section>
                <footer className="text-[12px] text-[#6e6e73] py-5">
                    <div class="flex flex-col xl:flex-row justify-between items-center">
                        <div class="py-3">
                            Copyright © 2022 Apple Inc. All rights reserved.
                        </div>
                        <div class="flex justify-start xl:justify-between items-center flex-wrap">
                            <a
                                class="border-r-[1px] border-[#d2d2d7] px-[10px] color-[#424245]"
                                href="/legal/privacy/"
                                data-analytics-title="privacy policy"
                            >
                                Privacy Policy
                            </a>
                            <a
                                class="border-r-[1px] border-[#d2d2d7] px-[10px] color-[#424245]"
                                href="/legal/internet-services/terms/site.html"
                                data-analytics-title="terms of use"
                            >
                                Terms of Use
                            </a>
                            <a
                                class="border-r-[1px] border-[#d2d2d7] px-[10px] color-[#424245]"
                                href="/us/shop/goto/help/sales_refunds"
                                data-analytics-title="sales and refunds"
                            >
                                Sales and Refunds
                            </a>
                            <a
                                class="border-r-[1px] border-[#d2d2d7] px-[10px] color-[#424245]"
                                href="/legal/"
                                data-analytics-title="legal"
                            >
                                Legal
                            </a>
                            <a
                                class="px-[10px] color-[#424245]"
                                href="/sitemap/"
                                data-analytics-title="site map"
                            >
                                Site Map
                            </a>
                        </div>
                    </div>
                </footer>
            </Wrapper>
        </div>
    )
}

export default Footer
