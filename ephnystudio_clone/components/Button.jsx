import { assets } from "@/constants";
import Image from "next/image";

const Button = function ({ text }) {
  return (
    <button className="cta-btn md:max-w-70 group hover:bg-purple-primary transition-all duration-300 overflow-hidden relative">
      {/* Wrapper for shifting content */}
      <div className="flex items-center gap-2 group-hover:-translate-x-2 transition-transform duration-300 ease-out">
        <div className="flex items-center">
          <div className="cta-people">
            <Image src={assets.ctaP1} alt="cta people" />
          </div>
          <div className="cta-people -translate-x-[6px]">
            <Image src={assets.ctaP2} alt="cta people" />
          </div>
        </div>

        <span className="text-black font-bold">{text}</span>
      </div>

      <span className="-rotate-45 group-hover:opacity-100 opacity-0 translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </span>
    </button>
  );
};

export default Button;
