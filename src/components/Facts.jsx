import React from "react";
import { useState } from "react";

const Facts = () => {
  const [fact, setFact] = useState(
    "The button below generates useless facts. Give it a try..."
  ); // variable to store fact

  function getFact() {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
      .then((res) => res.json())
      .then((data) => setFact(data.text))
      .catch((err) => console.log(err));
  } // function to get fact from external API and store in the variable

  return (
    <>
      <section className=" w-[90%] md:w-[75%] bg-slate-200 rounded-lg p-8">
        <p className="text-gray-800 leading-6 text-center overflow-hidden">
          {fact}
        </p>
      </section>
      <button
        className="bg-[#209cee] mt-4 px-4 py-2 rounded-lg text-white font-bold hover:bg-[#0065a8] transition ease-in-out delay-150 duration-300"
        onClick={getFact}
      >
        Generate
      </button>
    </>
  );
};

export default Facts;
