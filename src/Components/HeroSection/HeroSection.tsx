import logo from '../../assets/logo.png'
function HeroSection() {
    return (
        <>
            <div className=" bg-[#e7f1f1] mx-15 rounded-2xl">
                <div className='p-5'>
                    <div className='relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" color="gray"
                            fill="currentColor" viewBox="0 0 24 24"
                            className="absolute left-6 top-1/2 -translate-y-1/2">
                            <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
                        </svg>

                        <input className='w-full text-2xl font-bold rounded-2xl py-8 pl-18 pr-80 bg-white shadow-2xl focus:outline-blue-700' type="text" placeholder='Type your domain name' />

                        <button className='absolute top-1/2 -translate-y-1/2 right-4 bg-[#09757A] flex items-center gap-3 text-white text-2xl rounded-lg px-5 py-4 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
                            </svg>
                            Search Domains
                        </button>
                    </div>
                </div>
            </div>


            <div className="text-white relative bg-linear-to-br from-indigo-500 to-violet-900 h-150 p-5 mx-15 my-10 rounded-2xl">
                <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 space-y-10'>
                    <div className='flex items-center justify-center gap-5 '>
                        <img className='w-24' src={logo} alt="" />
                        <p className='text-4xl font-bold'>DomainBD</p>
                    </div>

                    <div>
                        <h1 className='font-bold text-3xl text-center'>Your domain unlocks everything, get a .com for just Tk 1.23/1st yr</h1>
                    </div>

                    <div className='relative'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="34" color="gray"
                            fill="currentColor" viewBox="0 0 24 24"
                            className="absolute left-6 top-1/2 -translate-y-1/2">
                            <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
                        </svg>

                        <input className='w-full text-2xl text-gray-700 font-bold rounded-2xl py-8 pl-18 pr-88 bg-white shadow-2xl focus:outline-blue-700' type="text" placeholder='Type your domain name' />

                        <button className='absolute top-1/2 -translate-y-1/2 right-4 bg-black flex items-center gap-3 text-white text-2xl rounded-lg px-5 py-4 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
                            </svg>
                            Claim your .com
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default HeroSection