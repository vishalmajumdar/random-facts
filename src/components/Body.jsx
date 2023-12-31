import React from "react";
import Facts from "./Facts";

const Body = () => {
  return (
    <section className="bg-white-300 p-10 flex flex-col items-center justify-center h-full text-center">
      <h2 className="text-4xl font-medium pt-4 pb-1 text-gray-700">
        Useless Facts
      </h2>
      <p className="text-lg pt-2 pb-6 text-[#cacaca]">
        You can generate random useless, but true facts
      </p>
      <Facts></Facts>
    </section>
  );
};

export default Body;
