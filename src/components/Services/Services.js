import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div
      className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      id="services"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="d9d7687a-355f-4502-8ec4-7945db034688"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Services</span>
          </span>{" "}
          from Alex Johnson
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Alex Johnson provides various courses. Here are some of them :
        </p>
      </div>
      <div className="grid gap-5 mb-8 md:grid-cols-2">
        <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 hover:-rotate-1 hover:shadow-stone-300 transition-all">
          <img
            className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg mx-2"
            src="https://i.pinimg.com/236x/20/9f/be/209fbe1e9e75abc24c6e2e51b22440ed--graphic-art-graphic-studio.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Iure officia velit itaque esse
              quaerat, aliquam ad enim dolor ullam at fugit dolore fugiat,
              dolorem vero impedit reiciendis ducimus possimus voluptate.
            </p>
            <Link
              to={"/checkout"}
              className="inline-flex items-center justify-center h-12 mt-4 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none active:scale-90"
            >
              Checkout
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 hover:-rotate-1 hover:shadow-stone-300 transition-all">
          <img
            className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg mx-2"
            src="https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Iure officia velit itaque esse
              quaerat, aliquam ad enim dolor ullam at fugit dolore fugiat,
              dolorem vero impedit reiciendis ducimus possimus voluptate.
            </p>
            <Link
              to={"/checkout"}
              className="inline-flex items-center justify-center h-12 mt-4 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none active:scale-90"
            >
              Checkout
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 hover:-rotate-1 hover:shadow-stone-300 transition-all">
          <img
            className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg mx-2"
            src="https://www.lcmtlondon.com/wp-content/uploads/2020/03/digital-marketting.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Iure officia velit itaque esse
              quaerat, aliquam ad enim dolor ullam at fugit dolore fugiat,
              dolorem vero impedit reiciendis ducimus possimus voluptate.
            </p>
            <Link
              to={"/checkout"}
              className="inline-flex items-center justify-center h-12 mt-4 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none active:scale-90"
            >
              Checkout
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 hover:-rotate-1 hover:shadow-stone-300 transition-all">
          <img
            className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg mx-2"
            src="https://media.istockphoto.com/vectors/game-dev-isometric-concept-education-of-creation-3d-design-of-or-vector-id1297564630?k=20&m=1297564630&s=612x612&w=0&h=QenkclbeLXqD7NHYdVoBrm3_T4u16fg86CTGMNGdSHQ="
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Iure officia velit itaque esse
              quaerat, aliquam ad enim dolor ullam at fugit dolore fugiat,
              dolorem vero impedit reiciendis ducimus possimus voluptate.
            </p>
            <Link
              to={"/checkout"}
              className="inline-flex items-center justify-center h-12 mt-4 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none active:scale-90"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link
          to="/services"
          className="inline-flex items-center justify-center h-12 mt-4 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none active:scale-90"
        >
          View All
        </Link>
      </div>
    </div>
  );
};
export default Services;
