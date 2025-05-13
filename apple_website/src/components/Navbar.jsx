import { assets } from "../utils/index";
import { navLists } from "../constants/index";

const Navbar = function () {
  return (
    <header className="flex w-full items-center justify-between px-5 py-5 sm:px-10">
      <nav className="relative mx-auto flex w-full max-w-[1120px]">
        <img src={assets.appleImg} alt="apple" width={18} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((navItem) => {
            return (
              <div
                className="cursor-pointer px-5 text-sm text-gray-200 transition-all hover:text-white"
                key={navItem}
              >
                {navItem}
              </div>
            );
          })}
        </div>

        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <img src={assets.searchImg} alt="search" width={18} height={18} />
          <img src={assets.bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
