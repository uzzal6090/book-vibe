
import Image from "next/image";
import React from "react";
import bannerImg from "@/assests/hero_img.jpg";

const Banner = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 bg-slate-300 rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden">

          {/* Left Content */}
          <div className="text-center lg:text-left space-y-5">

            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              Discover Your Next Read
            </span>

            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
              Books to
              <span className="text-primary"> freshen up </span>
              your bookshelf!
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Discover amazing books, explore new stories, and find your next
              favorite book all in one place.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
              <button className="btn btn-primary rounded-full px-6">
                Explore Books
              </button>

              <button className="btn btn-outline rounded-full px-6">
                View Categories
              </button>
            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src={bannerImg}
              alt="Books illustration"
              priority
              className="w-full max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
