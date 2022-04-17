import React from "react";
import person from "../../assets/images/person.png";

const Header = () => {
  return (
    <div className="main flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl md:mb-24">
      <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
        <div className="max-w-xl mb-6">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            The quick, brown fox
            <br className="hidden md:block" />
            jumps over{" "}
            <span className="inline-block text-deep-purple-accent-400">
              a lazy dog
            </span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nemo quia vero harum inventore tempore, quam ipsum amet! Quo,
            adipisci.
          </p>
        </div>
        <div className="flex items-center">
          <a
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Get started
          </a>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
      <div className="md:pt-12 pt-0">
        <img
          src={person}
          className=" w-2/3 md:w-full lg:animate-wiggle rounded-lg  mx-auto xl:mr-24 md:max-w-sm"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
