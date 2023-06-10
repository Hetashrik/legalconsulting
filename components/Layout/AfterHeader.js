import Image from "next/image";
import Legal1 from "../../public/images/Legal1.png"
import AfterHeader_mv from "../../public/images/AfterHeader_mv.png";

function AfterHeader() {
    return (
        <>
        <div className="max-w-[1240px]">

        <div className="w-[100%] hidden sm:block"> 
            <div>
            <Image className="-z-10" src={Legal1} alt="FG_LOGO" width="1980" height="1113.75" />
                <p className="text-center text-white relative bottom-[26rem] font-medium text-7.5xl font-sans">FINTRACT GLOBAL</p>
                <p className="text-center text-white relative bottom-96  text-6.5xl font-sans font-semibold">WE HELP FOR PROFESSIONAL SERVICES</p>
                <p className="text-center text-white relative bottom-96  text-6.5xl font-sans font-semibold"> WITH PERSONAL ATTENTION</p>
                <p className="text-center text-white relative bottom-80 font-sans">Our vision is to enrich customer and stakeholder experience,</p>
                <p className="text-center text-white relative bottom-80 font-sans">embrace niche tools and technology</p>
            </div>
        </div>


        {/* Mobile view */}
        <section className="lg:hidden">
            <div>
                <Image src={AfterHeader_mv} className="w-full" />
            </div>
            <div className="bg-[#332b27]">
                <p className="text-white ml-4 text-5xl pt-4 ">FINTRACT</p>
                <p className="text-white ml-4 text-5xl ">GLOBAL</p>
                <p className="text-white ml-4 text-2xl pt-4">WE HELP FOR PROFESSIONAL</p>
                <p className="text-white ml-4 text-2xl">SERVICES WITH PERSONAL</p>
                <p className="text-white ml-4 text-2xl">ATTENTION</p>
                <p className="text-white ml-4 pt-4">Our vision is to enrich customer and stakeholder</p>
                <p className="text-white ml-4 pb-4">experience, embrace niche tools and technology</p>
            </div>
        </section>
        </div>
        </>
    );
}

export default AfterHeader;