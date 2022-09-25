import React from 'react'
import OfferItems from './OfferItems'

const content = [
    {
        id: 1,
        heading: 'Buy an Apple device',
        title: '3 months free.',
        subtitle:
            'Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer within 90 days.',
        buttonText: 'Check eligibility',
    },
    {
        id: 2,
        heading: 'Free 7-day trial',
        title: '$4.99/mo',
        subtitle:
            'A monthly subscription is just $4.99 per month after a free 7-day trial. Share Apple TV+ with your family.',
        buttonText: 'Try it free',
    },
    {
        id: 3,
        heading: 'Free 1-month trial',
        title: 'Apple One',
        subtitle:
            'Bundle Apple TV+ with up to five other great services for one low monthly price. And enjoy more for less.',
        buttonText: 'Try Apple One free*',
    },
]

const OfferSection = () => {
    return (
        <div className="flex flex-col gap-16 px-6 pt-[150px] ">
            {/* Need to add when I created left section pb-[170px] */}
            {content.map((item) => (
                <OfferItems key={item.id} {...item} />
            ))}
        </div>
    )
}

export default OfferSection
