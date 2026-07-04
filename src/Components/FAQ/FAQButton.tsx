type Faqs = {
    question: string;
    answer: string;
    activeQuestion: string | null
    clickMenu: (name: string) => void;
}

function FAQButton({ question, answer, activeQuestion, clickMenu }: Faqs) {
    const isActive = activeQuestion === question;
    return (
        <div>
            <div onClick={() => { clickMenu(question) }}
                className={`flex items-center justify-between cursor-pointer p-4 rounded-lg
                bg-blue-50
            ${isActive ? "bg-white text-black" : ""}`}>

                <p className="font-semibold text-xl tracking-wide">{question}</p>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className={`
                    transition-transform duration-100
                    ${isActive ? "rotate-180" : ""}
                `}
                >
                    <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z" />
                </svg>
            </div>

            <div>

                {
                    isActive && (<p className="bg-white rounded-b-2xl border-t-2 p-4 font-medium text-lg">{answer}</p>)
                }

            </div>
        </div>
    )
}

export default FAQButton