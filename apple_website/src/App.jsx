import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";

import * as Sentry from "@sentry/react";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}

const WrappedApp = Sentry.withProfiler(App);
export default WrappedApp;
