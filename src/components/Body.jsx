import React from "react";

const Body = () => {
  return (
    <section className="bg-white-300 p-10 flex flex-col items-center justify-center h-full text-center">
      <h2 className="text-4xl font-medium pt-4 pb-1 text-gray-700">
        Useless Facts
      </h2>
      <p className="text-lg pt-2 pb-6 text-[#cacaca]">
        You can generate random useless, but true facts
      </p>
      <section className=" w-[90%] md:w-[75%] bg-slate-200 rounded-lg p-8">
        <p className="text-gray-800 leading-6 text-center overflow-hidden">
          The longest word in the English language, according to the Oxford
          English Dictionary, is:
          pneumonoultramicroscopicsilicovolcanoconiosis..
        </p>
      </section>
      <button className="bg-[#209cee] mt-4 px-4 py-2 rounded-lg text-white font-bold hover:bg-[#0065a8] transition ease-in-out delay-150 duration-300">
        Generate
      </button>
    </section>
  );
};

export default Body;
