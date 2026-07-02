type Service = {
    image: string;
    title: string;
    description: string;
    imgColor: string;
}
type ServiceCardprops = {
    service: Service
    index: number
}

function ServicesCard({ service, index }: ServiceCardprops) {
    const positionClasses = [
        "scale-125 rotate-y-45",
        "scale-120 rotate-y-40",
        "scale-115 rotate-y-35",
        "scale-110 rotate-y-30",
        "scale-105  rotate-y-25",
    ];

    return (
        <div className={`${index !== 0 ? "ml-1" : ""}`}>
            <div
                className={`relative w-60  shadow-2xl rounded-xl bg-white px-6 py-8 transition-all duration-300 hover:-translate-y-6 hover:rotate-0 hover:scale-130 hover:z-100
        ${positionClasses[index]}`}>

                <div className="space-y-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${service.imgColor}`}>
                        <img className="h-6 w-6 object-contain" src={service.image} alt="" />
                    </div>
                    <div className="space-y-3 text-left">
                        <h1 className="text-xl font-extrabold text-[#111827]">{service.title}</h1>
                        <p className="text-sm leading-6 text-[#374151]">{service.description}</p>
                    </div>
                </div>

                <button className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-500 cursor-pointer">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 24 24"
                        className="h-4 w-4">
                        <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default ServicesCard