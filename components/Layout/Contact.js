import Image from "next/image";
import FG_LOGO_white_4 from "../../public/images/FG_LOGO_white_4.png";
import insta_logo from "../../public/images/insta_logo.png";
import twitter_logo from "../../public/images/twitter_logo.png";
import fb_logo from "../../public/images/fb_logo.png";
import linkedin_logo from "../../public/images/linkedin_logo.png";
import call from "../../public/images/call.png";
import msg from "../../public/images/msg.png";
import location from "../../public/images/location.png";
import twitter_mv from "../../public/images/twitter_mv.png";
import insta_mv from "../../public/images/insta_mv.png";
import fb_mv from "../../public/images/fb_mv.png";
import linkedin_mv from "../../public/images/linkedin_mv.png";

function Contact() {
    return (
        <>

            <div className="bg-[#ea580c] h-[590px] hidden sm:block">
                <div className="flex space-x-14 relative top-14 left-16">
                    <Image src={FG_LOGO_white_4} width="100" height="115" className="relative" />
                    <h1 className="text-white text-4xl font-bold relative top-4">Fintract Global</h1>
                </div>
                <div className="text-white text-left relative top-24 left-16">

                    <p>At Fintract Global Ltd, we combine a cutting-edge tech stack with exceptional</p>
                    <p>talent from Europe, Asia and America to lead change in how financial entities work. </p>
                    <p>Headquartered in London, Fintract Global develops cutting edge fintech</p>
                    <p> and regtech products.</p>
                </div>
                <div className="relative top-36 left-20 flex space-x-5">
                    <Image src={twitter_logo} width="30" height="30" />
                    <Image src={insta_logo} width="30" height="30" />
                    <Image src={fb_logo} width="30" height="30" />
                    <Image src={linkedin_logo} width="30" height="30" />
                </div>
                <div className="relative bottom-[9.5rem] left-[50rem]">
                    <h1 className="text-white text-4xl font-bold relative top-4">Contacts</h1>
                    <div className="flex space-x-2 top-10 relative">
                        <Image src={call} width="50" height="50" />
                        <h2 className="text-white font-bold relative top-2">Phone:</h2>
                        <h2 className="text-white font-bold relative top-2">+44-2037373227</h2>
                    </div>
                    <div className="flex space-x-2 top-20 relative">
                        <Image src={msg} width="50" height="50" />
                        <h2 className="text-white font-bold relative top-2">Email:</h2>
                        <h2 className="text-white font-bold relative top-2">contact@fintractglobal.com</h2>
                    </div>
                    <div className="flex space-x-2 top-[7.4rem] relative">
                        <Image src={location} width="50" height="50" />
                        <h2 className="text-white font-bold relative top-2">Address:</h2>
                        <h2 className="text-white font-bold relative top-2 text-left">Docklands Business Center 10-16</h2>
                        <h2 className="text-white font-bold relative top-7 right-64 text-left">Tiller Road E14 8PX</h2>
                    </div>
                </div>
                <div>
                    <p className="text-white font-bold relative left-3">_______________________________________________________________________________________________________________________________________________________________________________________________________________________</p>
                    <p className="text-white relative top-8 left-3">Fintract Global takes your privacy very seriously. We may process your personal information for carefully considered and specific purpose which are in our interests and</p>
                    <p className="text-white relative top-8 left-3"> enable us to enhance the service we provide.</p>
                    <p className="text-white font-serif relative top-20 left-3">© Copyright 2023. All rights reserved</p>
                    <p className="text-white font-serif relative top-[3.5rem] text-right right-4">Privacy Policy</p>
                </div>
            </div>


            {/* Mobile view */}
            <section className="lg:hidden sm:w-[1263px] max-w-screen-xl">
                <div className="bg-[#ea580c]">
                    <div>
                        <Image src={FG_LOGO_white_4} width={75} height={75} className="m-9 pt-9" />
                        <h1 className="text-white text-5xl m-8">Fintract Global</h1>
                        <p className="text-white ml-7">At Fintract Global Ltd, we combine a cutting-edge</p>
                        <p className="text-white ml-7">tech stack with exceptional talent from Europe</p>
                        <p className="text-white ml-7">Asia and America to leadchange in how financial</p>
                        <p className="text-white ml-7">entities work. Headquartered in London,</p>
                        <p className="text-white ml-7">Fintract Global develops cutting edge fintech</p>
                        <p className="text-white ml-7"> and regtech products.</p>
                        <div className="flex mt-11 space-x-7 ml-7">
                            <Image src={twitter_mv} />
                            <Image src={insta_mv} />
                            <Image src={fb_mv} />
                            <Image src={linkedin_mv} />
                        </div>

                        {/* address */}
                        <div className="flex mt-20 space-x-7 ml-7">
                            <Image src={location} />
                            <p className="text-white text-3xl font-bold mt-5">Address</p>
                        </div>
                        <p className="text-white ml-32 relative bottom-3">Docklands Business Center 10-16</p>
                        <p className="text-white ml-32 relative bottom-3">Tiller Road E14 8PX</p>

                        {/* Phone */}
                        <div className="flex mt-7 space-x-7 ml-7">
                            <Image src={call} />
                            <p className="text-white text-3xl font-bold mt-5">Phone</p>
                        </div>
                        <p className="text-white ml-32 relative bottom-3">+44-2037373227</p>
                    </div>

                    {/* Email */}
                    <div className="flex mt-7 space-x-7 ml-7">
                        <Image src={msg} />
                        <p className="text-white text-3xl font-bold mt-5">Email</p>
                    </div>
                    <p className="text-white ml-32 relative bottom-5">contact@fintractglobal.com</p>
                    <p className="text-white ml-6">____________________________________________________</p>

                    <p className="text-white ml-7 mt-7">Fintract Global takes your privacy very seriously. We may process your personal information for carefully considered and specific purposes which are in our interests and enable us to enhance the services we provide, but which we believe also benefit our customers. View our Privacy Policy to learn more about these interests and when we may process your information in this way.</p>
                    <p className="text-white text-center mt-16 pb-6">Copyright ©2021 All rights reserved.</p>
                </div>
            </section>
  
        </>

    );
}

export default Contact;