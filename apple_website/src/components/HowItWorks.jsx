import { useGSAP } from "@gsap/react";
import { assets } from "../utils";
import gsap from "gsap";
import { useRef } from "react";
import { animateWithGsap } from "../utils/animation";

const HowItWorks = function () {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center my-20 w-full">
          <img src={assets.chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip.
            <br /> A monster win for gaming.
          </h2>

          <p className="hiw-subtitle">
            It's here. The biggest redesign in the history of the Apple GPUs
          </p>
        </div>

        <div className="mt-10 mb-14 md:mt-20">
          <div className="flex-center relative h-full">
            <div className="overflow-hidden">
              <img
                src={assets.frameImg}
                alt="frame"
                className="relative z-10 bg-transparent"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                autoPlay
                muted
                preload="none"
                ref={videoRef}
              >
                <source src={assets.frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>

          <p className="text-gray-primary mt-3 text-center font-semibold">
            Honkai: Star Real
          </p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 flex-col justify-center">
            <p className="hiw-text g_fadeIn">
              A17 is an entirely new class of iPhone chip that delivers our
              <span className="text-white">
                best graphic performance by far.
              </span>
            </p>

            <p className="hiw-text g_fadeIn">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive,{" "}
              </span>
              with incredibly detailed environments and characters
            </p>
          </div>

          <div className="g_fadeIn flex flex-1 flex-col justify-center">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro class GPU</p>
            <p className="hiw-text">with 6 cores.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
