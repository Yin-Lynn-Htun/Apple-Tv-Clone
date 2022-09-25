import React from 'react'
import AccordionItem from './AccordionItem'

const FaqSection = () => {
    return (
        <section className="px-6">
            <h1 className="text-2xl text-center font-semibold mb-11">
                Questions? Answers.
            </h1>
            <div className="w-full">
                <div>
                    <AccordionItem
                        id="1"
                        ques="What is Apple TV+?"
                        ans="Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids’ entertainment, comedies, and more — with new Apple Originals added every month."
                    />
                    <AccordionItem
                        id="2"
                        ques="How can I watch it?"
                        ans="Watch Apple TV+ on the Apple TV app, which is already on your favorite Apple devices. Just open the app, click or tap Apple TV+, and enjoy the shows and movies. You can also watch Apple TV+ on streaming platforms, popular smart TVs, and AirPlay-enabled TVs with the Apple TV app — or watch online at tv.apple.com."
                    />
                    <AccordionItem
                        id="3"
                        ques="What does it cost?"
                        ans="That all depends on which offer you choose. (1) If you buy an Apple device, Apple TV+ is included free for 3 months.1 (2) A monthly subscription is just $4.99 per month after a free seven-day trial.2
                        (3) Apple TV+ is included in Apple One, which bundles up to five other Apple services into a single monthly subscription. Apple One plans start at $14.95 per month. (4) The Apple Music Student Plan comes with a free subscription to Apple TV+.3"
                    />
                    <AccordionItem
                        id="4"
                        ques="Can I share with my family?"
                        ans="Of course. Apple TV+ lets you share your subscription with up to five family members."
                    />
                    <AccordionItem
                        id="5"
                        ques="Are there commercials? And can I watch on demand?"
                        ans="Apple Originals are always commercial-free. Some shows release all episodes at once. Other shows add new episodes every Friday. You can then watch them on demand anytime, anywhere."
                    />
                    <AccordionItem
                        id="6"
                        ques="Do I need an Apple TV 4K?"
                        ans="No, you don’t. While Apple TV 4K — with 4K HDR and Dolby Atmos sound — is the ultimate way to experience Apple TV+, the original shows and movies on Apple TV+ are always available on the Apple TV app on your favorite devices."
                    />
                    <AccordionItem
                        id="7"
                        ques="Can I download to watch offline?"
                        ans="Absolutely. Download your favorite Apple Originals to your Apple device and watch them anywhere, anytime without a Wi-Fi connection."
                    />
                </div>
            </div>
        </section>
    )
}

export default FaqSection
