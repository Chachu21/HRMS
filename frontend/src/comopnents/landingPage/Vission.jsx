import React from "react";
import checkIcon from "../../assets/157822.svg";

const Vission = () => {
  return (
    <div>
      <section className="bg-white" id="vission">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-center text-slate-500 text-4xl font-bold tracking-tight sm:text-5xl">
           Our Vission And Mission
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-32">
            <blockquote className="rounded-lg bg-gray-50 p-8">
              <div className="flex items-center gap-4">
                <div>
                  <p className="mt-1 text-lg font-bold text-gray-800">
                    Vission
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <img
                  src={checkIcon}
                  className="text-blue-600 text-md"
                  alt="checkIcon"
                />

                <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-600">
                  To be a leading institution of higher education that prepares
                  students to become engaged and responsible global citizens,
                  leaders in their fields, and lifelong learners committed to
                  making a positive impact in society.
                </p>
              </div>

              <div className="flex justify-center items-center gap-2">
                <img
                  src={checkIcon}
                  className="text-blue-600 text-md"
                  alt="checkIcon"
                />
                <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-600">
                  We envision a community of students, inspired by
                  transformative teaching, who will contribute profoundly to the
                  world as intellectual leaders.
                </p>
              </div>
            </blockquote>

            <blockquote className="rounded-lg bg-gray-50 p-8">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="mt-1 text-lg font-bold text-gray-800">
                      Mission
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <img
                    src={checkIcon}
                    className="text-blue-600 text-md"
                    alt="checkIcon"
                  />

                  <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-600">
                    Our mission is to provide a transformative educational
                    experience that cultivates intellectual curiosity, critical
                    thinking, and a commitment to ethical and social
                    responsibility.
                  </p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <img
                    src={checkIcon}
                    className="text-blue-600 text-md"
                    alt="checkIcon"
                  />
                  <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-600">
                    We strive to foster a diverse and inclusive community that
                    values creativity, innovation, and collaboration, while
                    preparing students with the knowledge, skills, and values
                    necessary to succeed in a rapidly changing world.
                  </p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <img
                    src={checkIcon}
                    className="text-blue-600 text-md"
                    alt="checkIcon"
                  />
                  <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-600">
                    We are committed to providing an exceptional education that
                    is accessible, affordable, and prepares our graduates to
                    make meaningful contributions to their communities and the
                    world.
                  </p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vission;
