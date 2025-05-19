import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./Pricinglist";
import Section from "./Section";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = function () {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="relative z-2 container">
        <div className="relative mb-[6.5rem] hidden justify-center lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt=""
          />

          <div className="pointer-events-none absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="stars"
            />
          </div>
        </div>

        <Heading
          tag="Get Started with Brainwave"
          title="Pay once, use forever"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/pricing"
            className="font-code border-b text-xs font-bold tracking-wider uppercase"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
