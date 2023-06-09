import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/background.jpg";
import CustomizedDialogs from "./BootstrapingDialog";
const Features = () => {
  return (
    <div>
      <section
        id="home"
        className="w-full h-screen"
        style={{
          background: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backdropFilter: "blur(50%)",
        }}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-2 sm:py-12 sm:px-6 lg:py-1 lg:px-8">
          <div className="">
            <div className="lg:py-16  h-full flex flex-col gap-32">
              <h2 className="text-[32px] text-white bg-green-500 text-center  font-bold sm:text-4xl sticky top-[70px] left-auto">
                Bahir Dar Polytechnic Human Resource Management System
              </h2>
              
              <div className="lg:mt-80 mt-52 inline-block text-center rounded px-44 lg:px-[500px] py-3 text-sm font-medium text-white transition focus:outline-none focus:ring focus:ring-yellow-400">
                {" "}
                <CustomizedDialogs text="Join Us" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container p-6 px-6 mx-auto bg-white">
          <div className="mb-16 text-center">
            <h2 className="text-base font-semibold tracking-wide text-black uppercase">
              Welcome to the College of Techniques!
            </h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-black  sm:text-4xl">
              A better way to manage human resources
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
              </div>
              <p className="leading-loose text-black text-md">
                Our college is dedicated to providing students with the skills
                and knowledge they need to succeed in today's ever-changing
                world. We offer a range of programs in various technical fields,
                including computing, engineering, hotel managment, and more.
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
              </div>
              <p className="leading-loose text-black text-md">
                At the College of Techniques, we believe that education should
                be accessible to everyone, regardless of their background or
                financial situation. That's why we offer a range of financial
                aid options to help students achieve their academic goals.
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
              </div>
              <p className="leading-loose text-black text-md">
                Our faculty members are experts in their fields, and they are
                committed to helping students reach their full potential. They
                provide individualized attention and support to each student,
                ensuring that they have the resources they need to succeed.
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
              </div>
              <p className="leading-loose text-black text-md">
                In addition to our academic programs, we offer a variety of
                extracurricular activities and clubs to help students get
                involved and make connections with their peers. We also provide
                opportunities for students to gain real-world experience through
                internships and other hands-on learning opportunities.
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
              </div>
              <p className="leading-loose text-black text-md">
                We develop the unique intellect, talents, and character of each
                student in a community dedicated to academic excellence,
                personal responsibility, and service to others.
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
              </div>
              <p className="leading-loose text-black text-md">
                Thank you for considering the College of Techniques for your
                education. We look forward to helping you achieve your academic
                and career goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
