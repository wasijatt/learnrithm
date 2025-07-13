
import FAQSection from "./Components/FAQSection"
// import Testimonials from "./Components/Testimonials";
import TeamSection from "./Components/TeamSection";
import KeyFeatures from "./Components/KeyFeatures";
import ResultCounter from "./Components/Results";
export default function Home() {
  return (
  <div className="flex justify-center items-center flex-col  w-full">
   <div className="w-full h-[100vh] primary-bg "></div>
    <KeyFeatures />
    {/* <Testimonials /> */}
    <FAQSection />
    <TeamSection />
  
    <ResultCounter />
    
    
   
  </div>
  );
}
