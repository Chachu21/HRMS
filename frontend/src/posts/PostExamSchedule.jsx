import React from "react";
import { useState } from "react";

const PostExamSchedule = () => {
  const [enteredJobTtle, setEnteredJobTitle] = useState("");
  const [enteredExamDate, setEnteredExamDate] = useState("");
  const [enteredPlace, setEnteredPlace] = useState("");
  const [enteredExamTime, setEnteredExamTime] = useState("");

  const handleJobTitleChange = (e) => {
    setEnteredJobTitle(e.target.value);
  };

  const handleExamDateChange = (e) => {
    setEnteredExamDate(e.target.value);
  };

  const handlePlaceChange = (e) => {
    setEnteredPlace(e.target.value);
  };

  const handleExamTimeChange = (e) => {
    setEnteredExamTime(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-white dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-700">
              Post Exam Schedule
            </h2>
            <form
              className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
              action="#"
              onSubmit={handleFormSubmit}
            >
              <div>
                <label
                  htmlFor="jobTitle"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  value={enteredJobTtle}
                  onChange={handleJobTitleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter job title"
                  required={true}
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                >
                  Exam Date
                </label>
                <input
                  type="date"
                  name="examDate"
                  id="examDate"
                  value={enteredExamDate}
                  onChange={handleExamDateChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>
              <div>
                <label
                  for="place"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                >
                  place
                </label>
                <input
                  type="text"
                  name="place"
                  id="place"
                  value={enteredPlace}
                  onChange={handlePlaceChange}
                  placeholder="enter place"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="examtime"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600"
                >
                  Exam Time
                </label>
                <input
                  type="time"
                  name="examtime"
                  id="examtime"
                  value={enteredExamTime}
                  onChange={handleExamTimeChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>
              <button
                type="submit"
                className="w-half text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Post Exam Schedule
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostExamSchedule;
