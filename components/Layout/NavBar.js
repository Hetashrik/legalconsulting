import Image from "next/image";
import FG_LOGO_white_4 from "../../public/images/FG_LOGO_white_4.png"

import hamburger_menu from "../../public/images/hamburger_menu.png";
import close_menu from "../../public/images/close_menu.png";
import { useState } from "react";

function NavBar() {

    const [navbar, setNavbar] = useState(false);
    return (
        <>
            <nav className="bg-black h-[90px] hidden sm:block">
                <div className="flex justify-between">
                    <div className="items-center py-4 px-10 inset-2 hidden sm:block">
                        <Image src={FG_LOGO_white_4} alt="FG_LOGO" width="32" height="32" className="w-[45px] h-[34.55px] ml-[18px] mt-[0px]" />
                    </div>

                    <div className="flex-wrap space-x-1 hidden sm:block relative right-[1000px] top-3">
                        <button className="px-3 py-2 text-sm font-medium text-white dropdown-toggle inline relative right-24" type="button" data-toggle="dropdown">More
                            <svg className="w-3.5 inline m-2 relative -right-[1px]" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#ffffff"></path></g></svg>
                        </button>
                        <button className="px-3 py-2 text-sm font-medium text-white dropdown-toggle inline relative right-24" type="button" data-toggle="dropdown">Our Products
                            <svg className="w-3.5 inline m-2 relative -right-[1px]" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#ffffff"></path></g></svg></button>
                        <input className="px-4 h-9 my-2 border border-1 outline-blue-600 border-gray-200 rounded-full flex relative left-[710px] bottom-10" type="text" placeholder="Search FG.." />
                        <button className="bg-white px-3 py-2 leading-tight text-black mx-2 relative bottom-[88px] left-[960px]">Log in
                            <svg className="w-3.5 inline m-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="arrow-up-right"> <g> <polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9"></line> </g> </g> </g> </g></svg>
                        </button>
                        <button className="bg-black px-3 py-2 leading-tight text-white mx-2 relative bottom-[88px] left-[990px]">Sign up
                            <svg className="w-3.5 inline m-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="arrow-up-right"> <g> <polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> <line fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9"></line> </g> </g> </g> </g></svg>
                        </button>
                    </div>
                </div>
            </nav>


            {/* mobile viewBox */}
            <section className="lg:hidden bg-black sm:w-[1263px] max-w-screen-xl">

                <div className="flex">

                    <button type="button" onClick={() => setNavbar(!navbar)}>
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-5 w-5 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        ></svg>
                        {navbar ? (

                            <Image src={close_menu} className="ml-5 mb-4" />
                        ) : (
                            <Image src={hamburger_menu} className="ml-5 mb-4" />

                        )}
                    </button>
                    <div className="w-px h-14 bg-[#676767] ml-2 mt-6 "></div>
                    <Image src={FG_LOGO_white_4} className="w-[55px] h-[47px] mt-8 ml-4" />
                    <button className="bg-blue-600 text-white leading-tight px-3 py-2 mt-7 mb-6 relative left-32 text-2xl">Login</button>

                </div>
                <div className="flex">
                    <input type="text" placeholder="Search" className="rounded-md  bg-white items-center shadow-[0_0px_7px_-1px_rgba(135, 153, 219, 1)] bg-white outline-none text-[#BBBABA] h-[39px] flex-1 -mt-1 p-3 relative left-5 mb-6" />
                    <div className=" justify-end bg-[#FF8A00] w-[38px] h-[32px] rounded-md text-center mr-0.5 relative bottom-[0.10rem] right-6">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-white w-5 h-5 mt-1 ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                </div>
                {navbar && (
                    <div className="absolute z-10 top-0 left-0 bg-black w-full h-full">
                        <div className="m-6">
                            <Image src={close_menu} className="relative" onClick={() => setNavbar(!navbar)} />
                            <ul className="items-center relative">
                                <li className="text-white text-2xl text-center m-3">Home</li>
                                <li className="text-white text-2xl text-center m-3">More</li>
                                <li className="text-white text-2xl text-center m-3">Our Product</li>
                                <li className="text-white text-2xl text-center m-3">Contact</li>
                            </ul>

                        </div>
                    </div>
                )} 
            </section>
           
        </>
    );
}

export default NavBar;