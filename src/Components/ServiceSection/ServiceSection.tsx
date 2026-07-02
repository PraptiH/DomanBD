import bgImg from '../../assets/bgImg.png'
import domain from '../../assets/domain.png'
import hosting from '../../assets/hosting.png'
import email from '../../assets/email.png'
import ssl from '../../assets/ssl.png'
import desktop from '../../assets/desktop.png'
import ServicesCard from './ServicesCard'


function ServiceSection() {

    type Service = {
        image: string;
        title: string;
        description: string
        imgColor: string
    }

    const services: Service[] = [
        {
            image: domain,
            title: "Domain",
            description: "Find and register the perfect domain name for your brand",
            imgColor: "bg-blue-400",
        },
        {
            image: hosting,
            title: "Hosting",
            description: "Fast, secure and reliable hosting for website",
            imgColor: "bg-teal-800",
        },
        {
            image: email,
            title: "Email",
            description: "Professional email that builds trust with your customers",
            imgColor: "bg-cyan-900",
        },
        {
            image: ssl,
            title: "SSL Certificates",
            description: "Secure your website and protect your visitors",
            imgColor: "bg-sky-600",
        },
        {
            image: desktop,
            title: "Website Builder",
            description: "Build a beautiful website in minuteswithout coding",
            imgColor: "bg-teal-600",
        },
    ]

    return (
        <>
            <div className='relative p-6 '>

                <img className=' w-full rounded-2xl' src={bgImg} alt="" />


                <div className='absolute inset-0 flex items-center px-6 '>

                    <div className=' w-full space-y-12 '>

                        <div className='space-y-5 text-white text-center lg:-translate-y-4'>
                            <h2 className='text-4xl font-bold leading-tight md:text-5xl'>Everything you need to Succeed Online</h2>
                            <p className='text-lg font-medium leading-8 md:text-xl'>Powerful products and tools to bring your ideas to life</p>
                        </div>

                        <div className='flex flex-wrap justify-center'>
                            {
                                services.map((service, index) =>
                                    <ServicesCard key={service.title} service={service} index={index} />)
                            }
                        </div>
                        
                        <button className="flex items-center mx-auto gap-3 rounded-full bg-white px-6 py-3 font-medium text-teal-900 cursor-pointer">
                            Explore all services
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 24 24" color="teal"
                                className="h-5 w-5">
                                <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceSection