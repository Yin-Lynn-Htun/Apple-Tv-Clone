import React from 'react'

const AccordionItem = ({ id, ques, ans }) => {
    return (
        <div className="tab w-full overflow-hidden border-b">
            <input
                className="absolute opacity-0 "
                id={id}
                type="checkbox"
                name="tabs"
            />
            <label
                className="block py-5 cursor-pointer text-lg font-semibold"
                for={id}
            >
                {ques}
            </label>
            <div className="tab-content overflow-hidden">
                <p className="text-base  pb-5">{ans}</p>
            </div>
        </div>
    )
}

export default AccordionItem
