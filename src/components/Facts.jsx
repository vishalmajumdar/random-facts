import React from "react";

fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
  .then((res) => res.json())
  .then((data) => console.log(data.text))
  .catch((err) => console.log(err));

const Facts = () => {
  return (
    <>
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
    </>
  );
};

export default Facts;
