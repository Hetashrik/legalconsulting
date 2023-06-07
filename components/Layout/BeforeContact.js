import Image from "next/image";
import Before_Contact from "../../public/images/Before_Contact.png";
import white_circle from "../../public/images/white_circle.png";
import left_arrow from "../../public/images/left_arrow.png";
import right_arrow from "../../public/images/right_arrow.png";

import { useState } from "react";

const info = [
    {
        id: 1,
        src: '/images/Expert_1_mv.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni mollit anim id est laborum.',
        name: 'Mr. Vikram tyagi, CEO',
        designation: 'ABS INC'
    },

    {
        id: 2,
        src: '/images/Expert_2_mv.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni mollit anim id est laborum.',
        name: 'Miss Vanshika Goel',
        designation: 'Swiss design Studio'
    },
    {
        id: 3,
        src: '/images/Expert_3_mv.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni mollit anim id est laborum.',
        name: 'Mr. Vikram tyagi, CEO',
        designation: 'ABS INC'
    },

    {
        id: 4,
        src: '/images/Expert_4_mv.png',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni mollit anim id est laborum.',
        name: 'Miss Vanshika Goel',
        designation: 'Swiss design Studio'
    },
]

function BeforeContact() {

    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    function nextText() {
        const newIndex = currentTextIndex === info.length - 1 ? 0 : currentTextIndex + 1;
        setCurrentTextIndex(newIndex);
    };

    function previousText() {
        const newIndex = currentTextIndex === 0 ? info.length - 1 : currentTextIndex - 1;
        setCurrentTextIndex(newIndex);
    };

    return (
        <div className="relative left-28 hidden sm:block top-48">
            <Image src={Before_Contact} width="780px" />
            <h1 className="relative bottom-[550px] left-96 text-5xl">Check Out Recent Reviews</h1>
            <section className="flex">
                <div className="w-[500px] h-[200px] space-x-20 bg-[#ECF5FF] border justify-center relative bottom-[430px] left-[90px]">

                    <p className="text-[#5A5555] p-3">{info[currentTextIndex].title}</p>
                    <Image src={info[currentTextIndex].src} width={50} height={50} className="relative top-6 right-16" />
                    <p className="font-bold relative bottom-5">{info[currentTextIndex].name}</p>
                    <p className="text-[#5A5555] relative bottom-5">{info[currentTextIndex].designation}</p>
                </div>
                <div className="ml-20 w-[500px] h-[200px] bg-[#ECF5FF] border justify-center relative bottom-[430px] left-[90px]">

                    <p className="text-[#5A5555] p-3">{info[currentTextIndex].title}</p>
                    <Image src={info[currentTextIndex].src} width={50} height={50} className="relative left-4 top-6"/>
                    <p className="font-bold relative left-20 bottom-5">{info[currentTextIndex].name}</p>
                    <p className="text-[#5A5555] relative left-20 bottom-5">{info[currentTextIndex].designation}</p>
                </div>
                <button className="absolute top-1/2 left-2 transform -translate-y-1/2 sm:hidden" onClick={previousText}>
                    <Image src={white_circle} alt="" width="40" height="50" className="relative right-40 bottom-80 shadow-inner rounded-full" />
                    <Image src={left_arrow} alt="" width="30" height="30" className="relative bottom-[355px] right-[157px]" />
                </button>
                <button className="absolute top-1/2 right-2 transform -translate-y-1/2 sm:hidden" onClick={nextText}>
                    <Image src={white_circle} alt="" width="40" height="50" className="relative bottom-80 right-16 rounded-full shadow-inner" />
                    <Image src={right_arrow} alt="" width="30" height="30" className="relative bottom-[355px] right-[58px]" />
                </button>
                <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 hidden sm:block" onClick={previousText}>
                    <Image src={white_circle} alt="" width="40" height="50" className="relative right-40 bottom-80 shadow-inner rounded-full" />
                    <Image src={left_arrow} alt="" width="30" height="30" className="relative bottom-[355px] right-[157px]" />
                </button>
                <button className="absolute bottom-2 right-1/2 transform translate-x-1/2 hidden sm:block" onClick={nextText}>
                    <Image src={white_circle} alt="" width="40" height="50" className="relative bottom-80 right-16 rounded-full shadow-inner" />
                    <Image src={right_arrow} alt="" width="30" height="30" className="relative bottom-[355px] right-[58px]" />
                </button>
            </section>
        </div>
    );
}

export default BeforeContact;