import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";

import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
// import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";

const Hero = function () {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="-mt-[5.25rem] pt-[12rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="relative container" ref={parallaxRef}>
        <div className="relative z-1 mx-auto mb-[4rem] max-w-[62rem] text-center md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of AI Chatting with Brainwave
            <span className="relative inline-block">
              Brainwave{" "}
              <img
                src={curve}
                className="absolute top-full left-0 xl:-mt-2"
                width={624}
                height={28}
                alt="curve"
              />{" "}
            </span>
          </h1>
          <p className="body-1 text-n-2 mx-auto mb-6 max-w-3xl lg:mb-8">
            Unleash the power of AI with Brainwave. Upgrade your productivity
            with Brainwave, a open AI chat app.
          </p>
          <Button white className="inline-flex" href="/pricing">
            Get started
          </Button>
        </div>

        <div className="relative mx-auto max-w-[23rem] md:max-w-5xl xl:mb-22">
          <div className="bg-conic-gradient relative z-1 rounded-2xl p-0.5">
            <div className="bg-n-8 relative rounded-[1rem]">
              <div className="bg-n-10 h-[1.4rem] rounded-t-[0.8rem]" />
              <div className="aspect-[33/40] overflow-hidden rounded-b-[0.9rem] md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full translate-y-[8%] scale-[1.7] md:-translate-y-[10%] md:scale-[1] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
              </div>
            </div>
          </div>

          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              alt="hero"
              className="w-full"
              width={1440}
              height={1800}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
