import { useState } from "react"
import GetDomain from "./GetDomain"
import { faqs } from "./FAQData"
import FAQButton from "./FAQButton"

function FAQ() {

    const [accordians, setAccordians] = useState<string | null>(null)

    const handleMenuClick = (question: string) => {
        setAccordians(
            accordians === question ? null : question
        )
    }



    return (
        <>
            <div className="bg-indigo-100 rounded-2xl m-8 lg:m-15 md:m-15 py-15">
                <GetDomain />

                <div className="flex flex-col items-center space-y-5 my-20">
                    <h1 className="font-bold text-3xl text-center">Frequently Asked Question</h1>
                    <div className="space-y-5 lg:w-5xl px-2">
                        {
                        faqs.map((faq) => (
                            <FAQButton key={faq.question}
                                question={faq.question}
                                answer={faq.answer}
                                clickMenu={handleMenuClick}
                                activeQuestion={accordians} />
                        ))
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ