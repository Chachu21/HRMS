import React from 'react'
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/background.jpg"
const Features = () => {
  return (
    <div>
      <div
        className="flex flex-col bg-gray-200 "
      
      ></div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8" >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="absolute inset-0 h-full w-full object-cover overflow-y-auto"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Grow your audience
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <Link to="/signUp"
                className="mt-8 inline-block text-center rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="container p-6 px-6 mx-auto bg-white">
        <div className="mb-16 text-center">
          <h2 className="text-base font-semibold tracking-wide text-black uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-black  sm:text-4xl">
            A better way to live
          </p>
        </div>
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
}

export default Features