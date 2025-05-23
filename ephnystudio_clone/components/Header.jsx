const Header = function () {
  return (
    <header className="md:w-[90%] px-4 py-2 md:px-6 md:py-4 mx-auto flex items-center justify-between">
      <h3 className="text-[1.4rem] flex-center font-semibold">
        Ephny Studio <span className="text-xs self-end">&reg;</span>
      </h3>
      <a
        href="/"
        className="flex-center hover:text-purple-primary text-lg gap-2 group"
      >
        Email us
        <span className="-rotate-45 group-hover:rotate-0">
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
      </a>
    </header>
  );
};

export default Header;
