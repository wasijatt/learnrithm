
import FAQSection from "./Components/FAQSection"
// import Testimonials from "./Components/Testimonials";
import KeyFeatures from "./Components/KeyFeatures";

export default function Home() {
  return (
  <div className="flex justify-center items-center flex-col  w-full">
   <div className="w-full h-[100vh] primary-bg "></div>
    <KeyFeatures />
    {/* <Testimonials /> */}
    <FAQSection />
  </div>
  );
}
