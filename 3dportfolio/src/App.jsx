import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import LogoSection from "./sections/LogoSection";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCard from "./sections/FeatureCard";
import ExperienceSection from "./sections/ExperienceSection";

const App = function () {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCard />
      <ExperienceSection />
    </>
  );
};

export default App;
