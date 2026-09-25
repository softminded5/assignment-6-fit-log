import Image from 'next/image';
import React from 'react';
import bannerImg from "@/app/assets/banner.png";

const Banner = () => {
    return (
        <div className='p-10'>
            <div className="mx-auto flex flex-col items-center overflow-hidden rounded-2xl border border-[#252830] bg-[#262d3de2] shadow-lg shadow-black/20 px-6 py-15 sm:px-10 lg:min-h-81.25 lg:flex-row lg:px-12">



            <div className="z-10 w-full lg:w-2/3">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-wider text-[#baff00] sm:text-xs">WORKOUT LIBRARY</p>
                <h1 className="max-w-2xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">TRAIN WITH INTENT. LOG
                    EVERY SET.</h1>

                <p className="mt-4 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>

                    <button className="mt-5 rounded-md bg-[#baff00] px-5 py-3 text-[10px] font-bold uppercase text-black transition hover:bg-[#ceea7f]">BROWSE WORKOUTS</button>
            </div>

            <div className="mt-6 flex justify-center lg:mt-0 lg:flex-1 lg:justify-end">
                <Image src = {bannerImg} alt="banner"
                className=" object-contain"
                />
            </div>
        </div>
        </div>
    );
};

export default Banner;