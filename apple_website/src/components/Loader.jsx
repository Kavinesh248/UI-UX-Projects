import { Html } from "@react-three/drei";

const Loader = function () {
  return (
    <Html>
      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
        <div className="h-[10vh] w-[10vw] rounded-full">Loading...</div>
      </div>
    </Html>
  );
};

export default Loader;
