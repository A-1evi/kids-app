import React from "react";
import { Link } from "react-router-dom";

const Alphabet = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleClick = (letter) => {
    // This function is called when a letter is clicked.
    console.log(`You clicked on: ${letter}`);
    // You can trigger audio or animation here, or navigate to a detailed page for each letter.
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-400 to-indigo-600 text-white">
      <h1 className="text-4xl font-bold mb-8">Learn the Alphabet</h1>
      <div className="grid grid-cols-6 gap-4">
        {alphabet.map((letter) => (
          <button
            key={letter}
            className="text-4xl bg-white text-black p-6 rounded-lg shadow-lg hover:bg-yellow-400 transition"
            onClick={() => handleClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <Link to="/" className="mt-10 bg-blue-500 text-white py-2 px-6 rounded-lg text-3xl">
        Go Back to Home
      </Link>
    </div>
  );
};

export default Alphabet;
