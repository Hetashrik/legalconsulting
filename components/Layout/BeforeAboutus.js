import Image from "next/image";
import Before_Aboutus from "../../public/images/Before_Aboutus.png"
import Review from "../../public/images/Review.png"

function BeforeAboutus() {
    return (
      <>
      {/* Mobile view */}
      <section className="lg:hidden">
        <div>
          <Image src={Before_Aboutus} className="w-full"/>
          <p className="text-white relative bottom-64 font-semibold text-2xl ml-4">Over 10k reviews</p>
          <Image src={Review} className="relative bottom-60 ml-4"/>
          <p className="text-white relative bottom-48 font-semibold text-2xl ml-4">20K+</p>
          <p className="text-white relative bottom-44 ml-4">User already registered and signing up</p>
          <p className="text-white relative bottom-44 ml-4">for our product</p>
        </div>
      </section>
      </>  
    );
}

export default BeforeAboutus;