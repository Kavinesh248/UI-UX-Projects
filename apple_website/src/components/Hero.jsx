import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import { assets } from "../utils";

const Hero = function () {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? assets.smallHeroVideo : assets.heroVideo,
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(assets.smallHeroVideo);
    } else {
      setVideoSrc(assets.heroVideo);
    }
  };

  useGSAP(() => {
    gsap.to("#hero", {
      delay: 1.5,
      opacity: 1,
    });

    gsap.to("#cta", {
      opacity: 1,
      delay: 2,
      y: -50,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  return (
    <section className="nav-height relative w-full bg-black">
      <div className="flex-center h-5/6 w-full flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>

        <div className="w-9/12 md:w-10/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex translate-y-20 flex-col items-center opacity-0"
      >
        <a href="/highlights" className="btn">
          Buy
        </a>
        <p className="text-xl font-normal">From $199/mnth or $999</p>
      </div>
    </section>
  );
};

export default Hero;
