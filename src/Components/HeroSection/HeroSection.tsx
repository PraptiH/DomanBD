function HeroSection() {
    return (
        <>
            <div className="sticky top-0 bg-[#e7f1f1]">
                <div className='flex mx-15 p-5 relative'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="40" color="gray"
                        fill="currentColor" viewBox="0 0 24 24"
                        className="absolute left-10 top-1/2 -translate-y-1/2">
                        <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
                    </svg>

                    <input className='flex-1 text-3xl font-bold rounded-2xl py-12 placeholder:translate-x-20 bg-white shadow-2xl focus:outline-blue-700' type="text" placeholder='Type your domain name' />

                    <button className='absolute top-1/2 -translate-y-1/2 right-10 bg-[#09757A] flex items-center gap-5 text-white text-3xl rounded-2xl px-5 py-8'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40"
                            fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
                        </svg>
                        Search Domains
                    </button>
                </div>
            </div>
        </>
    )
}
export default HeroSection