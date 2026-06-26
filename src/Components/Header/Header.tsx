import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"

function Header() {
    return (
        <>
            <div className="bg-black text-white flex items-center justify-around px-8 py-5">

                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3.75">
                        <img className="w-20" src={logo} alt="" />
                        <h2 className="font-bold text-4xl">DomainBD <sub className="font-normal text-lg -ml-22 top-5">Bangladesh</sub></h2>
                    </div>

                    <div className="flex items-center gap-8 font-medium text-lg">
                        <div className="flex items-center gap-1">
                            <p>Domains</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="currentColor" viewBox="0 0 24 24" >
                                <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
                            </svg>
                        </div>

                        <div className="flex items-center gap-1">
                            <p>Websites</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="currentColor" viewBox="0 0 24 24" >
                                <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
                            </svg>
                        </div>

                        <div>
                            <NavLink to='/email'>Email</NavLink>
                        </div>

                        <div className="flex items-center gap-1">
                            <p>Hosting</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="currentColor" viewBox="0 0 24 24" >
                                <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
                            </svg>
                        </div>

                        <div className="flex items-center gap-1">
                            <p>Marketing</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="currentColor" viewBox="0 0 24 24" >
                                <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
                            </svg>
                        </div>

                        <div className="flex items-center gap-1">
                            <p>Security</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="currentColor" viewBox="0 0 24 24" >
                                <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
                            </svg>
                        </div>

                        <div>
                            <NavLink to='/aiBuilder'>Ario AI Builder</NavLink>
                        </div>

                        <div>
                            <NavLink to='/pricing'>Pricing</NavLink>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-5 text-lg">
                    <NavLink to="/deals">Deals</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                    <NavLink to="/help">Help</NavLink>
                    <NavLink to="/signIn">Sign In</NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                        fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M21 6H7.05L5.94 2.68A1 1 0 0 0 4.99 2h-3v2h2.28l3.54 10.63A2 2 0 0 0 9.71 16h7.59a2 2 0 0 0 1.87-1.3l2.76-7.35c.11-.31.07-.65-.11-.92A1 1 0 0 0 21 6m-3.69 8H9.72l-2-6h11.84zM10 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4"></path>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Header