type Domain = {
    extension: string
    price: string
    description: string
}

type DomainCardProps = {
    domain: Domain
}

function DomainCard({ domain }: DomainCardProps) {
    return (
        <>
            <div className="bg-[#F8FAFC] w-full max-w-75 min-h-80 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-2 p-6">
                <div className="text-center space-y-2">
                    <h1 className="font-bold text-4xl text-[#020617]">{domain.extension}</h1>
                    <p className="font-semibold text-2xl text-[#475569]">{domain.price}</p>
                    <p className="text-xl font-medium">{domain.description}</p>
                </div>

                <button className="flex items-center gap-3 rounded-2xl text-2xl px-5 py-3 mt-8 font-bold text-white bg-[#00838C] hover:bg-[#006F75] cursor-pointer">
                    Search
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 24 24"
                        className="w-10">
                        <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path>
                    </svg>
                </button>
            </div>
        </>
    )
}

export default DomainCard