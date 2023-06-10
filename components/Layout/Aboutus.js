import Image from "next/image";
import About_us from "../../public/images/About_us.png"
import white_circle from "../../public/images/white_circle.png";
import left_arrow from "../../public/images/left_arrow.png";
import right_arrow from "../../public/images/right_arrow.png";
import { useState } from "react";

const texts = [
  {
    id: 1,
    text: 'Our team equipped with the latest technologies, which allows us to provide services such as asset tracking, computer forensic, due diligence, ethical hacking, financial investigation, forensic accounting, forensic valuation, policy-making and regulatory compliance. We currently provide services to various clients in the UK and Europe.',
  },
  {
    id: 2,
    text: 'Driven by a passion for technological innovation and fully-fledged with a team of legal experts, who are the master of their trades, makes Fintract Global the right choice for your legal consultancy needs. We offer a diverse discourse that ranges from technological laws such as Open Banking Law, Blockchain Law, Artificial Intelligence Law to Company Law, Tax Law, Bankruptcy Law, Intellectual Property, and more.',
  },
  {
    id: 3,
    text: 'At Fintract Global, we believe in ethics, honesty, loyalty and stand out for our commitment. Our priority is our clients, and our team work hard to ensure that we deliver excellent client service',
  },
];
function Aboutus() {


  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  function nextText() {
    const newIndex = currentTextIndex === texts.length - 1 ? 0 : currentTextIndex + 1;
    setCurrentTextIndex(newIndex);
  };

  function previousText() {
    const newIndex = currentTextIndex === 0 ? texts.length - 1 : currentTextIndex - 1;
    setCurrentTextIndex(newIndex);
  };

  return (
    <>


      <div className="hidden sm:block text-0.5xl">
        <div className="flex">
          <div>
            <Image className="relative bottom-72 left-[2.75rem]" src={About_us} alt="Aboutus" width="500" height="1048" />
            <div className="flex">
              <p className="font-medium relative -top-[15.75rem] left-[4.75rem]">Over 10k reviews</p>
              <div>
                <p className="font-bold text-4xl relative -top-[15.75rem] left-[4.75rem] ml-20 text-left">20K +</p>
                <p className="font-medium relative -top-[15.75rem] left-[4.75rem] text-left">User already registered</p>
                <p className="font-medium relative -top-[15.75rem] left-[4.75rem] text-left"> signing up for our product</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <p className="relative left-[6rem] -top-[13rem] text-left font-medium text-5.5xl">About Us</p>
              <p className="relative left-[6rem] -top-[12rem] text-left font-medium text-5.5xl">We have the best attorney for your</p>
              <p className="relative left-[6rem] -top-[12rem] text-left font-medium text-5.5xl">best support</p>
              <div>
                <li className="relative left-[6rem] -top-[13rem] text-left mt-10">Driven by a passion for technological innovation and fully-fledged with a team of legal</li>
                <p className="relative left-[6rem] -top-[13rem]"> experts, who are the master of their trades, makes. Fintract Global the right choice for your</p>
                <p className="relative left-[6rem] -top-[13rem]"> legal consultancy needs. We offer a diversed is course that ranges from technological laws </p>
                <p className="relative left-[6rem] -top-[13rem]">such as Open  Banking Law, Blockchain Law, Artificial Intelligence Law to Company Law, Tax</p>
                <p className="relative left-[6rem] -top-[13rem]">Law, Bankruptcy Law, Intellectual Property, and more</p>
                <li className="relative left-[6rem] -top-[13rem] text-left mt-10">Our team equipped with the latest technologies, which allows us to provide</li>
                <p className="relative left-[6rem] -top-[13rem]"> services such as asset tracking, computer forensic, due diligence,ethical hacking, financial</p>
                <p className="relative left-[6rem] -top-[13rem]"> investigation, forensic accounting, forensic valuation, policy-making and regulatory</p>
                <p className="relative left-[6rem] -top-[13rem]"> compliance. We currently provide services to various clients in the UK and Europe.</p>
                <li className="relative left-[6rem] -top-[13rem] text-left mt-10">At Fintract Global, we believe in ethics, honesty, loyalty and stand out</li>
                <p className="relative left-[6rem] -top-[13rem]"> for our commitment. Our priority is our clients, and our team work hard to ensure</p>
                <p className="relative left-[6rem] -top-[13rem]"> that we deliver excellent client service.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <section className="lg:hidden w-screen">
        <div className="relative bottom-24">
          <p className="text-center font-bold text-3xl">About Us</p>
          <p className="text-center font-semibold text-1xl mt-1">We have the best attorney for your</p>
          <p className="text-center font-semibold text-1xl">Abest support</p>
        </div>

        {/* slider */}
        <section>
        <div className="bg-[#8db2fa] shadow-md rounded-md justify-center mx-11 -my-14">
        <p className="p-7 text-justify text-smx">{texts[currentTextIndex].text}</p>
            <button className="relative bottom-44 left-2 transform -translate-y-1/2 " onClick={previousText}>
              <Image src={white_circle} alt="" width="40" height="50" className="relative right-2" />
              <Image src={left_arrow} alt="" width="30" height="30" className="relative bottom-[2.1rem] right-1" />
            </button>
            <button className="relative bottom-44 left-[13.5rem] transform -translate-y-1/2 " onClick={nextText}>
              <Image src={white_circle} alt="" width="40" height="50" className="relative left-2" />
              <Image src={right_arrow} alt="" width="30" height="30" className="relative bottom-[2.1rem] left-3" />
            </button>
          </div>
        </section>
      </section>

      

    </>
  );
}

export default Aboutus;