
import FAQSection from "./Components/FAQSection"
// import Testimonials from "./Components/Testimonials";
import TeamSection from "./Components/TeamSection";
import KeyFeatures from "./Components/KeyFeatures";
import ResultCounter from "./Components/Results";
import VideoSection from "./Components/VideoSection";
import Navbar from "./Components/Navbar";
import ComparisonTable from "./Components/ComparisonTable";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col  w-full">
      <Navbar />
      {/* <div className="w-full h-[100vh] primary-bg "></div> */}
      <KeyFeatures />
      <VideoSection />
      {/* <Testimonials /> */}
      <FAQSection />
      <TeamSection />

      <ComparisonTable />
      <ResultCounter />
      <Footer />

    </div>
  );
}
