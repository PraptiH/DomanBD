import DomainCard from "./DomainCard"

function PopularDomain() {
    type Domain = {
        extension: string,
        price: string,
        description: string,
        badgeInfo?:string,
        badgeColor?:string
    }

    const domains: Domain[] = [
        {
            extension: ".com",
            price: "Tk 1200/year",
            description: "The world's most popular domain",
            badgeInfo: "Most Popular",
            badgeColor:"bg-blue-800"
        },
        {
            extension: ".bd",
            price: "Tk 1200/year",
            description: "Perfect for businesses in Bangladesh",
            badgeInfo: "Best for Bangladesh",
            badgeColor:"bg-green-900"
        },
        {
            extension: ".net",
            price: "Tk 1000/year",
            description: "Great for networking and technology"
        },
        {
            extension: ".org",
            price: "Tk 900/year",
            description: "Ideal for organizations and non-profits"
        },
        {
            extension: ".info",
            price: "Tk 700/year",
            description: "Share information with the world"
        },
    ]

    return (
        <>

            <div className="bg-blue-50 rounded-2xl m-8 lg:m-15 md:m-15 py-10">
                <div className="text-center space-y-3">
                    <h1 className="font-bold text-4xl tracking-wider text-[#0F172A]">Popular Domain Extensions</h1>
                    <p className="font-medium text-xl">Find the perfect domain for your band</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 px-6 py-12">
                    {domains.map((domain) => (
                        <DomainCard key={domain.extension} domain={domain} />
                    ))}
                </div>
                <button className="border-2 border-blue-700 rounded-full px-4 py-2 mx-auto flex items-center cursor-pointer hover:bg-[#106e74] hover:text-white hover:border-white font-medium">View all domain extensons
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 24 24" 
                        className="w-10  text-blue-700 hover:text-white">
                        <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path>
                    </svg>
                </button>
            </div>

        </>
    )
}

export default PopularDomain