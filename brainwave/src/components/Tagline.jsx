import brackets from "../assets/svg/Brackets";

const Tagline = function ({ className, children }) {
  return (
    <div className={`tagline flex items-center ${className || ""} `}>
      {brackets("left")}
      <div className="text-n-3 mx-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default Tagline;
