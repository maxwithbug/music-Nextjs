

// import EarthSpline from "@/spline/EarthSpline";
// import RabbitTrack from "@/spline/RabbitTrack";
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import React from "react";

function page() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
{/* 
      spline earth
      <div className="grid grid-cols-2 h-screen">
        <div className="w-full h-full ">
          <EarthSpline />
        </div>
        <div>
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-mono text-center">Learn from Any-Where</h1>
        </div>
      </div> */}


      {/* <div className='w-[400px] h-[400px]'>
      <RabbitTrack/>
      </div> */}


    </main>
  );
}

export default page;
