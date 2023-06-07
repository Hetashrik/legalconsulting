import Aboutus from "@/components/Layout/Aboutus";
import AfterHeader from "@/components/Layout/AfterHeader";
import BeforeAboutus from "@/components/Layout/BeforeAboutus";
import BeforeContact from "@/components/Layout/BeforeContact";
import BigCompany from "@/components/Layout/Bigcompany";
import Contact from "@/components/Layout/Contact";
import Expert from "@/components/Layout/Expert";
import NavBar from "@/components/Layout/NavBar";
import WhyChoose from "@/components/Layout/Whychoose";


function Index() {
  return (
    <div>
      <NavBar />
      <AfterHeader />
      <BeforeAboutus />
      <Aboutus />
      <BigCompany />
      <WhyChoose />
      <Expert />
      <BeforeContact />
      <Contact />
    </div>
  );
}

export default Index;