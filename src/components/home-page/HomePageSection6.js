import React from "react";

const HomePageSection6 = () => {
  return (
    <>
      <div className="section6 bg-sky w-screen  px-[30px] py-[50px] md:px-[50px] md:py-[80px] lg:p-[140px]">
        <div className="section6-container grid grid-cols-12 space-y-[20px]">
          <div className="col-span-12 lg:col-span-4 space-y-[24px]">
            <h3 className="text-dark md:text-[16px] lg:text-[16px] font-playfair tracking-wide lg:font-bold">
              DON'T MISS OUT
            </h3>
            <h2 className="text-dark text-[30px] lg:text-[40px] font-playfair leading-none">
              Subscribe for the
              <br className="hidden lg:block" /> exclusive updates!
            </h2>
          </div>
          <div className="hidden lg:block col-span-1"></div>
          <div className="col-span-12 md:col-span-8 lg:col-span-4 flex items-center">
            <input
              className="section6-input"
              placeholder="Enter your Email Address"
            />
          </div>
          <div className="col-span-12 md:col-span-4 lg:col-span-3 flex items-center justify-end">
            <button className="bg-primary font-roboto font-600 uppercase text-[16px] text-white px-[25px] md:px-[50px] lg:px-[30px] py-[10px] md:py-[20px] lg:py-[16px] tracking-wide shadow-lg hover:bg-opacity-80 transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageSection6;
