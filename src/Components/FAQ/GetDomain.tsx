import search from '../../assets/search.png'
import cart from '../../assets/cart.png'
import rocket from '../../assets/rocket.png'

function GetDomain() {
    return (
        <>
            <div className='space-y-8'>
                <div className="text-center space-y-2">
                    <h1 className="font-bold text-3xl">Get your Domain in 3 simple steps</h1>
                    <p className="font-medium text-lg tracking-wide text-gray-800">It's quick, easy and hassle-free</p>
                </div>

                <div className='flex flex-wrap items-center justify-center lg:justify-around lg:flex-row flex-col gap-8 lg:gap-0 px-2'>
                    <div className='flex items-start gap-5 max-w-100 min-h-30'>
                        <p className="flex h-12 w-12 lg:h-15 lg:w-15 md:h-15 md:w-15 shrink-0 items-center justify-center rounded-full bg-[#006F75] font-medium text-white">01</p>
                        <div className='flex max-[600px]:flex-wrap max-[600px]:justify-center items-center gap-4 '>

                            <div className='rounded-full w-16 h-16 lg:w-20 lg:h-20 md:w-20 md:h-20 flex shrink-0 bg-white'>
                                <img className='p-4' src={search} alt="" />
                            </div>

                            <div>
                                <h3 className='font-medium text-xl lg:text-2xl md:text-2xl'>Search Your Domain</h3>
                                <p className='text-base lg:text-lg md:text-lg'>Enter your desired domain name and check availability</p>
                            </div>
                        </div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 24 24"
                        className='w-15 text-teal-900 rotate-90 lg:rotate-0 '>
                        <path d="M17 5H6.5C4.02 5 2 7.02 2 9.5S4.02 14 6.5 14H17c1.1 0 2 .9 2 2s-.9 2-2 2H2v2h15c2.21 0 4-1.79 4-4s-1.79-4-4-4H6.5a2.5 2.5 0 0 1 0-5H17v3l5-4-5-4z"></path>
                    </svg>

                    <div className='flex items-start gap-5 max-w-100 min-h-30'>
                        <p className="flex h-12 w-12 lg:h-15 lg:w-15 md:h-15 md:w-15 shrink-0 items-center justify-center rounded-full bg-[#006F75] font-medium text-white">02</p>
                        <div className='flex max-[600px]:flex-wrap max-[600px]:justify-center items-center gap-4'>

                            <div className='rounded-full w-16 h-16 lg:w-20 lg:h-20 md:w-20 md:h-20 flex shrink-0 bg-white'>
                                <img className='p-4 object-contain' src={cart} alt="" />
                            </div>

                            <div>
                                <h3 className='font-medium text-xl lg:text-2xl md:text-2xl'>Choose & Register</h3>
                                <p className='text-base lg:text-lg md:text-lg'>Select your domain and complete the registration</p>
                            </div>
                        </div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 24 24"
                        className='w-15 text-teal-900 lg:rotate-0 rotate-90 sm:rotate-90'>
                        <path d="M17 5H6.5C4.02 5 2 7.02 2 9.5S4.02 14 6.5 14H17c1.1 0 2 .9 2 2s-.9 2-2 2H2v2h15c2.21 0 4-1.79 4-4s-1.79-4-4-4H6.5a2.5 2.5 0 0 1 0-5H17v3l5-4-5-4z"></path>
                    </svg>

                    <div className='flex items-start gap-5 max-w-100 min-h-30'>
                        <p className="flex h-12 w-12 lg:h-15 lg:w-15 md:h-15 md:w-15 shrink-0 items-center justify-center rounded-full bg-[#006F75] font-medium text-white">03</p>
                        <div className='flex max-[600px]:flex-wrap max-[600px]:justify-center items-center gap-4'>

                            <div className='rounded-full w-16 h-16 lg:w-20 lg:h-20 md:w-20 md:h-20 flex shrink-0 bg-white'>
                                <img className='p-4' src={rocket} alt="" />
                            </div>

                            <div>
                                <h3 className='font-medium text-xl lg:text-2xl md:text-2xl'>Launch Your Dream</h3>
                                <p className='text-base lg:text-lg md:text-lg'>Your domain is ready. Start building your online presence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetDomain