import React from "react";

const RequestJobRank = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto my-10 gap-5 bg-gray-100 h-[100vh]">
        <h1 className="text-3xl mb-4">Request Job Rank</h1>
        <form action="" className="flex flex-col items-center gap-5">
          <div className="flex items-center w-full mb-4">
            Rank To{" "}
            <select className="w-half p-2 px-5 mx-5 border border-gray-400 outline-none rounded ">
              <option value="">select rank</option>
            </select>
          </div>
          <div className="flex items-center w-full mb-4">
            <label for="clearancefile" className="w-1/4 mr-2">
              Attachment(CV)
            </label>
            <input
              type="file"
              name="clearancefile"
              id="clearancefile"
              accept="image/png, image/jpeg, image/jpg"
              className="w-3/4"
            />
          </div>
          <div className="flex justify-center w-full gap-7 mt-10">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Clear
            </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>
    </div>
  );
};

export default RequestJobRank;
