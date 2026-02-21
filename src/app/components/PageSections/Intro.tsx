import Image from "next/image";

export default function Intro() {
    return(
<div
  id="home-section"
  className="bg-white flex flex-row items-start justify-between gap-4 mt-8 px-4 sm:px-8 md:px-[50px] lg:px-[150px]"
>
  {/* Text */}
  <div className="flex-1 min-w-0 pr-2">
    <h1 className="font-tertiary text-[#3B3B3B] text-[18px] leading-tight sm:text-4xl lg:text-[64px]">
      Uw project, vakkundig uitgevoerd
    </h1>

    <p className="font-spartan font-[200] text-[#3B3B3B] text-[11px] mt-2 leading-snug sm:hidden">
      Wij denken mee, meten in en bouwen zoals het hoort. Voor kleine klussen en complete
      verbouwingen.
    </p>

    <p className="font-spartan font-[200] text-[#3B3B3B] hidden sm:block sm:text-lg lg:text-[40px] mt-4 leading-snug">
      Wij denken mee, meten in en<br />
      bouwen zoals het hoort.<br />
      Voor kleine klussen en complete<br />
      verbouwingen.
    </p>
  </div>

  {/* Image */}
  <div className="relative w-[44%] max-w-[260px] sm:max-w-[600px] mt-2 sm:mt-[40px] flex-none">
    <Image
      src="/main-page-image.jpg"
      alt="main page image"
      height={500}
      width={500}
      className="z-10 relative h-auto w-full"
      priority
    />
    <div className="bg-[#9D9D9D] absolute h-full w-full top-2 right-2 z-0" />
    <div className="z-20 border-t-4 border-r-4 absolute border-r-[#3B3B3B] border-t-[#3B3B3B] bottom-2 left-2 h-full w-full" />
  </div>
</div>
    );
}