import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/background.jpg";
const Features = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-2 sm:py-12 sm:px-6 lg:py-1 lg:px-8">
          <div className="">
            <div className="lg:py-16  h-full flex flex-col gap-32">
              <h2 className="text-[32px] text-white bg-green-500 text-center  font-bold sm:text-4xl ">
                Bahir Dar Polytechnic Human Resource Management System
              </h2>

              <p className="mt-4 text-3xl text-white"></p>

              <Link
                to="/signUp"
                className="mt-32 inline-block text-center rounded sm:px-20 lg:px-52 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring focus:ring-yellow-400"
              >
                <span class="bg-blue-500 rounded-md text-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-3 xl:px-12 xl:py-4 2xl:px-16 2xl:py-5">
                  Join Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="container p-6 px-6 mx-auto bg-white">
        {/* <div className="mb-16 text-center">
          <h2 className="text-base font-semibold tracking-wide text-black uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-black  sm:text-4xl">
            A better way to live
          </p>
        </div> */}
        <div className="flex flex-wrap my-1 text-white">
          <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
            <div className="flex items-center mb-6">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-6 h-6 text-indigo-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
              <div className="ml-4 text-xl">Increase sales</div>
            </div>
            <p className="leading-loose text-black text-md">
              Receive more sales by selling across multple sales channels
              instead of just having a single point of entry.
            </p>
          </div>
          <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
            <div className="flex items-center mb-6">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-6 h-6 text-indigo-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
              <div className="ml-4 text-xl">Overlays</div>
            </div>
            <p className="leading-loose text-black text-md">
              Apply beautiful overlays to every product image distributed
              through our platform. A visual touch.
            </p>
          </div>
          <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0">
            <div className="flex items-center mb-6">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-6 h-6 text-indigo-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
              <div className="ml-4 text-xl">Control</div>
            </div>
            <p className="leading-loose text-black text-md">
              Apply filters and control which products to sell on each sales
              channel. E.g. exclude products with low margins.
            </p>
          </div>
          <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0">
            <div className="flex items-center mb-6">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-6 h-6 text-indigo-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
              <div className="ml-4 text-xl">Mapping</div>
            </div>
            <p className="leading-loose text-black text-md">
              Map product categories with each sales channels&#x27; own
              categories and achieve better results and lower costs.
            </p>
          </div>
          <div className="w-full p-8 border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0">
            <div className="flex items-center mb-6">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-6 h-6 text-indigo-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
              <div className="ml-4 text-xl">Fill the missing</div>
            </div>
            <p className="leading-loose text-black text-md">
              Modify products with extra properties and achieve the maximum
              output for each installed sales channel.
            </p>
          </div>
          <div className="w-full p-8 md:w-1/2 lg:w-1/3">
            <div className="flex items-center mb-6">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-6 h-6 text-indigo-500"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
              <div className="ml-4 text-xl">Dynamic Texts</div>
            </div>
            <p className="leading-loose text-black text-md">
              Build unique product titles and descriptions instead of spending
              days manually editing each product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
