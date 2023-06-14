import React from "react";

const ButtonForm = ({ text }) => {
  return (
    <button
      className="text-white bg-indigo-600 hover:bg-indigo-700 font-semibold p-3 px-5 rounded-md shadow-md hover:shadow-lg w-full transition duration-300 ease-in-out"
      type="submit"
    >
      {text}
    </button>
  );
};

export default ButtonForm;
