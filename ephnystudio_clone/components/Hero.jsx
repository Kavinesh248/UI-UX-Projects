"use client";

import { assets } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Button from "./Button";
import LogoList from "./LogoList";

const Hero = function () {
  useGSAP(() => {
    let tl = gsap.timeline();

    tl.to("#hero", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    }).to("#button", {
      y: 0,
      opacity: 1,
      // duration: 1,
      ease: "power4.inOut",
    }).to("#logoList", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.inOut",
    })
  }, []);

  return (
    <section className="padding-common">
      <div id="hero" className="gsap-translate">
        <aside className=" mt-8 flex">
          <div>
            <Image src={assets.framerImg} className="size-6" alt="" />
          </div>

          <div className="text-sm lg:text-md font-ppneue-medium flex flex-col md:flex-row md:gap-2 justify-center">
            <p>Official Framer partners & experts</p>
            <p className="text-green-primary">Available for work</p>
          </div>
        </aside>
        <div className="hero-text max-w-4xl mt-4 bg-black-primary">
          <h1>Brand Design & Web</h1>
          <h1>Development <span className="hidden md:inline-block">Studio.</span></h1>

          <p className="text-base">
            Our designs help tech and lifestyle brands launch succesfully, raise
            funding, increase traffic, and build revenue.
          </p>
        </div>
      </div>
      <div id="button" className="gsap-translate flex max-w-2xl">
        <Button text="Book a call" />
        <a href="/">See our work</a>
      </div>

      <LogoList />
    </section>
  );
};

export default Hero;
