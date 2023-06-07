import Image from "next/image";
import paypal_mv from "../../public/images/paypal_mv.png";
import google_mv from "../../public/images/google_mv.png";
import amazon_mv from "../../public/images/amazon_mv.png";
import uni_mv from "../../public/images/uni_mv.png";
import PayPal_Logo from "../../public/images/PayPal_Logo.png";
import Paypal from "../../public/images/Paypal.png";
import Google_Logo from "../../public/images/Google_Logo.png";
import Google from "../../public/images/Google.png";
import university from "../../public/images/university.png";
import Amazon_Logo from "../../public/images/Amazon_Logo.png";
import Amazon from "../../public/images/Amazon.png";


function BigCompany() {
    return (
        <>
            <div className="relative bottom-20 hidden sm:flex left-[400px]">
                <h1 className="font-sans font-bold text-5xl text-center">Many big company trusted us</h1>
            </div>
            <div className="items-center relative bottom-16 left-32 hidden sm:block">
            <div className="flex">

                <Image className="items-center relative left-[16rem] mt-16" src={PayPal_Logo} alt="PayPalLogo" width="35" height="50.27" />
                <Image className="items-center relative left-[16rem] mt-16" src={Paypal} alt="PayPal" width="100" height="50.27" />
                <Image className="items-center relative left-[18rem] mt-16" src={Google_Logo} alt="GoogleLogo" width="35" height="50.27" />
                <Image className="items-center relative left-[18rem] mt-16" src={Google} alt="Google" width="100" height="50.27" />
                <Image className="items-center relative left-[20rem] mt-16" src={university} alt="university" width="200" height="112" />
                <Image className="items-center relative left-[22rem] mt-16" src={Amazon_Logo} alt="AmazonLogo" width="35" height="50.27" />
                <Image className="items-center relative left-[22rem] mt-16" src={Amazon} alt="Amazon" width="100" height="50.27" />
            </div>
            </div>

            {/* Mobile view */}
            <section className="lg:hidden mt-28">
                <div className="bg-[#595959] py-7">
                    <p className="text-center text-white text-xl">Many big company trusted us</p>
                    <p className="text-center text-white text-sm mt-3">Our clients include multinational corporations, financial</p>
                    <p className="text-center text-white text-sm">institutions, private equity funds, domestic corporations, joint</p>
                    <p className="text-center text-white text-sm">ventures, emerging companies, start-ups, non-governmental</p>
                    <p className="text-center text-white text-sm">organizations, international organizations, individuals and</p>
                    <p className="text-center text-white text-sm">government.</p>
                    <div>
                    <div className="flex">
                        <Image className="items-center mt-9 mx-auto ml-16" src={paypal_mv} alt="PayPalLogo" />

                        <Image className="items-center mt-9 mx-auto mr-11" src={google_mv} alt="GoogleLogo" width="150" height="50" />
                    </div>
                    <div className="flex">
                        <Image className="items-center mt-9 mx-auto ml-16" src={uni_mv} alt="university" />
                        <Image className="items-center mt-9 mx-auto mr-11" src={amazon_mv} alt="AmazonLogo" />
                    </div>
                </div>
                </div>
            </section>

        </>
    );
}

export default BigCompany;