import React from "react";

const Jumbotron = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("nextSection");
    nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <h1 className="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Unlock $1{" "}
          </span>
          Free Credit Now!
        </h1>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-gray-200">
          Seize the Opportunity: Sign Up, Verify Smoothly, and Delight in a
          Instant $1 Credit - Embark on Your Rewarding Adventure Today!
        </p>
        <button
          onClick={scrollToNextSection}
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Get started
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Jumbotron;
