import SectionSvg from "../assets/svg/SectionSvg";

const Section = function ({
  className,
  children,
  id,
  crosses,
  crossesOffset,
  customPaddings,
}) {
  return (
    <div
      id={id}
      className={`relative ${customPaddings || `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`} ${className || ""}`}
    >
      {children}

      <div className="bg-stroke-1 pointer-events-none absolute top-0 left-5 hidden h-full w-0.25 md:block lg:left-7.5 xl:left-10" />
      <div className="bg-stroke-1 pointer-events-none absolute top-0 right-5 hidden h-full w-0.25 md:block lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          <div
            className={`bg-stroke-1 absolute top-0 right-7.5 left-7.5 hidden h-0.25 ${crossesOffset && crossesOffset} xl: pointer-events-none right-10 lg:left-10 lg:block`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
