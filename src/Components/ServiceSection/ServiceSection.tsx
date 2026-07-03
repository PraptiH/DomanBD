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
        
            <div className='relative overflow-hidden m-15 rounded-2xl min-h-350 sm:min-h-300 md:min-h-245 lg:min-h-0'>
                <img className='absolute inset-0 h-full w-full object-cover' src={bgImg} alt="" />

                <div className='relative z-10 flex h-full flex-col items-center justify-center px-4 py-10 sm:px-6 md:px-8 lg:px-6 lg:space-y-12'>
                    <div className='space-y-4 text-center text-white sm:space-y-5'>
                        <h2 className='text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl'>Everything you need to Succeed Online</h2>
                        <p className='text-sm font-medium leading-6 sm:text-base sm:leading-7 lg:text-lg lg:leading-8'>Powerful products and tools to bring your ideas to life</p>
                    </div>

                    <div className='flex flex-wrap justify-center pt-8 gap-4 sm:gap-5'>
                        {
                            services.map((service,index) =>
                                <ServicesCard key={service.title} service={service} index={index}  />)
                        }
                    </div>

                    <button className="mt-4 flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-teal-900 cursor-pointer sm:px-6 sm:text-base lg:mt-0">
                        Explore all services
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 24 24" color="teal"
                            className="h-5 w-5">
                            <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        
    )
}

export default ServiceSection