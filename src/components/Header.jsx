import React from "react";

const Header = () => {
  return (
    <header className="p-4 shadow-sm">
      <nav className="flex justify-between items-center">
        <button className="bg-[#209cee] px-4 py-2 rounded-lg text-white font-bold hover:bg-[#0065a8]  transition ease-in-out delay-150 duration-300">
          <a
            href="https://github.com/vishalmajumdar/random-facts"
            target="_blank"
          >
            GitHub 🔗
          </a>
        </button>
        <h1 className="text-xl font-bold text-[#209cee]">Random Facts</h1>
        <button className="bg-[#209cee] px-4 py-2 rounded-lg text-white font-bold cursor-default hover:bg-[#0065a8] transition ease-in-out delay-150 duration-300">
          Made with ❣️
        </button>
      </nav>
    </header>
  );
};

export default Header;
