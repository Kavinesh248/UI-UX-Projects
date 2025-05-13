import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { assets } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = function () {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      duration: 1,
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
    });
  }, []);

  return (
    <div className="common-padding bg-zinc-primary h-full w-screen overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>

          <div className="flex items-end gap-5">
            <p className="link">
              Watch the film{" "}
              <img src={assets.watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event{" "}
              <img src={assets.rightImg} alt="play" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </div>
  );
};

export default Highlights;
