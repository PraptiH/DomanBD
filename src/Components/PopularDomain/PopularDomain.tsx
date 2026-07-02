import DomainCard from "./DomainCard"

function PopularDomain() {
    type Domain = {
        extension: string,
        price: string,
        description: string,
    }

    const domains: Domain[] = [
        {
            extension: ".com",
            price: "Tk 1200/year",
            description: "The world's most popular domain"
        },
        {
            extension: ".bd",
            price: "Tk 1200/year",
            description: "Perfect for businesses in Bangladesh"
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

            <div className="bg-blue-50 rounded-2xl m-15 py-10">
                <div className="text-center space-y-3">
                    <h1 className="font-bold text-5xl tracking-wider text-[#0F172A]">Popular Domain Extensions</h1>
                    <p className="font-medium text-xl">Find the perfect domain for your band</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 px-6 py-12">
                    {domains.map((domain) => (
                        <DomainCard key={domain.extension} domain={domain} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default PopularDomain