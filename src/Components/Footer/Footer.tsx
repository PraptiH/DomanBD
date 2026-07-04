import logo from '../../assets/logo.png'
function Footer() {
    return (
        <>
            <div className="bg-black text-white p-15 space-y-5">

                <div className='flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-around'>
                    <div className='space-y-3'>
                        <div className="flex items-center gap-3">
                            <img className="w-15" src={logo} alt="" />
                            <h2 className="font-bold text-2xl relative">DomainBD <sub className="font-normal text-sm lg:left-12 top-6 absolute">Bangladesh</sub></h2>
                        </div>
                        <p>Your trusted partner for domains, hosting and online success.</p>

                        <div className='flex items-center gap-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" ><g transform="scale(5.12,5.12)"><path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path></g></g>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" width="30" height="30"><path d="M 2.8671875 3 L 9.7363281 12.818359 L 2.734375 21 L 5.3808594 21 L 10.919922 14.509766 L 15.460938 21 L 21.371094 21 L 14.173828 10.697266 L 20.744141 3 L 18.138672 3 L 12.996094 9.0097656 L 8.7988281 3 L 2.8671875 3 z" /></svg>

                            <svg fill="#FFFFFF" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" width="30" height="30" color=''><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z"></path> </g></svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 509.64"><path fill="#fff" d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z" /></svg>
                        </div>
                    </div>

                    <div className='space-y-3'>
                        <h4 className='font-medium text-lg'>Products</h4>
                        <div className='text-base space-y-2'>
                            <p>Domains</p>
                            <p>Hosting</p>
                            <p>Email</p>
                            <p>SSL Certificates</p>
                            <p>Website Builder</p>
                        </div>
                    </div>

                    <div className='space-y-3'>
                        <h4 className='font-medium text-lg'>Company</h4>
                        <div className='text-base space-y-2'>
                            <p>About Us</p>
                            <p>Contact Us</p>
                            <p>Careers</p>
                            <p>News & Blog</p>
                        </div>
                    </div>

                    <div className='space-y-3'>
                        <h4 className='font-medium text-lg'>Support</h4>
                        <div className='text-base space-y-2'>
                            <p>Help Center</p>
                            <p>Contact Support</p>
                            <p>Domain Transfer</p>
                        </div>
                    </div>

                    <div className='space-y-3'>
                        <h4 className='font-medium text-lg'>Resources</h4>
                        <div className='text-base space-y-2'>
                            <p>Domain Guide</p>
                            <p>Hosting Guide</p>
                        </div>
                    </div>
                </div>

                <hr className='text-gray-800' />

                <div className='flex justify-between flex-wrap'>
                    <div className='flex items-center gap-2'>
                       <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill='white' width="20" viewBox="0 0 122.88 122.72"><g><path  d="M89.34,46.85L76.2,49.97c-2.85-7.47-7.61-11.23-14.29-11.23c-5.12,0-9.15,1.97-12.05,5.94 c-2.93,3.94-4.38,9.23-4.38,15.8c0,5.17,0.6,9.56,1.83,13.12c1.23,3.56,3.04,6.21,5.42,8.02c2.38,1.78,5.23,2.68,8.54,2.68 c7.37,0,12.4-4.6,15.09-13.8l12.98,4.41C85.07,88.82,75.6,95.78,60.95,95.78c-5.23,0-10.13-1.29-14.65-3.86 c-4.52-2.55-8.13-6.46-10.87-11.69c-2.71-5.26-4.08-11.5-4.08-18.78c0-6.79,1.26-12.73,3.78-17.85c2.49-5.09,6.11-9.06,10.79-11.91 c4.68-2.82,10.16-4.24,16.48-4.24C75.65,27.43,84.63,33.9,89.34,46.85L89.34,46.85z M61.44,0c8.38,0,16.32,1.56,23.79,4.68 c7.45,3.15,14.02,7.56,19.71,13.25c5.7,5.69,10.1,12.27,13.25,19.71c3.12,7.47,4.68,15.39,4.68,23.79c0,11.01-2.77,21.25-8.3,30.67 c-5.53,9.45-13.01,16.92-22.42,22.4c-9.42,5.48-19.66,8.21-30.72,8.21c-11.23,0-21.55-2.74-30.91-8.19 c-9.39-5.45-16.84-12.9-22.31-22.34C2.74,82.77,0,72.5,0,61.44c0-11.12,2.74-21.41,8.21-30.83c5.48-9.45,12.95-16.92,22.4-22.4 C40.03,2.74,50.32,0,61.44,0L61.44,0z M61.44,12.05c-9.04,0-17.33,2.22-24.83,6.65c-7.5,4.44-13.47,10.43-17.88,17.99 c-4.41,7.58-6.63,15.83-6.63,24.75c0,8.98,2.22,17.22,6.63,24.72c4.41,7.53,10.38,13.47,17.91,17.88 c7.56,4.41,15.8,6.63,24.81,6.63c8.93,0,17.17-2.19,24.78-6.57c7.58-4.38,13.58-10.32,17.99-17.85c4.41-7.5,6.63-15.77,6.63-24.81 c0-8.87-2.22-17.11-6.65-24.7c-4.44-7.58-10.43-13.61-18.02-18.04C78.61,14.27,70.37,12.05,61.44,12.05L61.44,12.05z"/></g></svg>
                        <p>2026 DomainBD. All rights reserved.</p>
                    </div>

                    <div className='flex gap-8'>
                        <p>Terms of Service</p>
                        <p>|</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer