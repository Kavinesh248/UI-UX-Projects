import { logoIconsList } from "@/constants";
import Image from "next/image";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <Image src={icon.imgPath}  alt={icon.name} />
    </div>
  );
};

const LogoList = function () {
  return (
    <div id="logoList" className="relative gsap-translate">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-35 w-full">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
           {logoIconsList.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoList;
