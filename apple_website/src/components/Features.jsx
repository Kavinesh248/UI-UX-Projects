import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { animateWithGsap } from "../utils/animation";
import { assets } from "../utils";

const Features = function () {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },

      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap("#feature_title", {
      y: 0,
      opacity: 1,
    });

    animateWithGsap(
      ".g_grow",
      {
        scale: 1,
        opacity: 1,
        ease: "power1",
      },
      { scrub: 5.5 },
    );

    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  });

  return (
    <section className="common-padding bg-zinc-primary relative h-full overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="feature_title" className="section-heading">
            Explore the full story.
          </h1>

          <div className="flex flex-col items-center justify-center overflow-hidden">
            <div className="mt-32 mb-24 pl-24">
              <h2 className="text-5xl font-semibold lg:text-7xl">iPhone</h2>
              <h2 className="text-5xl font-semibold lg:text-7xl">
                Forged in titanium.
              </h2>
            </div>

            <div className="flex-center flex-col sm:px-10">
              <div className="relative flex h-[50vh] w-full items-center">
                <video
                  playsInline
                  autoPlay
                  muted
                  className="h-full w-full object-cover object-center"
                  id="exploreVideo"
                  ref={videoRef}
                >
                  <source src={assets.exploreVideo} type="video/mp4" />
                </video>
              </div>

              <div className="relative flex w-full flex-col">
                <div className="feature-video-container">
                  <div className="h-[50vh] flex-1 overflow-hidden">
                    <img
                      src={assets.explore1Img}
                      alt="titanium"
                      className="feature-video g_grow"
                    />
                  </div>
                  <div className="h-[50vh] flex-1 overflow-hidden">
                    <img
                      src={assets.explore2Img}
                      alt="titanium"
                      className="feature-video g_grow"
                    />
                  </div>
                </div>

                <div className="feature-text-container">
                  <div className="flex-container flex-1">
                    <p className="feature-text g_text">
                      iPhone 15 Pro is
                      <span className="text-white">
                        the first iPhone to feature an aerospace-grade titanium
                        design{" "}
                      </span>
                      using the same alloy that spacecraft use for missions to
                      Mars.
                    </p>
                  </div>

                  <div className="flex-container flex-1">
                    <p className="feature-text g_text">
                      Titanium has one of the best strength-to-weight ratios of
                      any metal, making these are
                      <span className="text-white">
                        lightest Pro model ever.
                      </span>
                      You'll notice the difference the moment you pick one up.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
