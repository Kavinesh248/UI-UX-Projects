import { curve1, curve2 } from "../../assets";

export const RightCurve = () => {
  return (
    <div className="pointer-events-none absolute top-1/2 left-full -mt-1 ml-10 hidden w-[10.125rem] xl:block">
      <img src={curve2} width={156} height={76} alt="Curve 2" />
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="pointer-events-none absolute top-1/2 right-full -mt-1 mr-10 hidden w-[32.625rem] xl:block">
      <img src={curve1} width={522} height={182} alt="Curve 1" />
    </div>
  );
};
