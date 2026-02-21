'use client';

import ProjectCard from "@/app/components/PageComponents/ProjectCard";
import useEmblaCarousel from "embla-carousel-react";


const projects = [
  {
    title: "Woonkamer renovatie",
    beforeImage: "/ProjectImages/beforeImage.png",
    afterImage: "/ProjectImages/afterImage.png",
    beforeAlt: "Woonkamer voor renovatie",
    afterAlt: "Woonkamer na renovatie",
    text:
      "Van bouwplaats naar thuis.\nBij deze renovatie hebben wij de woonkamer volledig vernieuwd \nvan vloeropbouw en timmerwerk tot de laatste afwerkdetails. Het \nresultaat: een lichte, comfortabele ruimte waarin alles klopt.",
  },
];

export default function ProjectSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className="flex flex-col items-center mt-12 sm:mt-[100px] cursor-default px-4">
      <p className="text-[#3B3B3B] text-2xl sm:text-4xl lg:text-[64px] font-tertiary">
        Projecten
      </p>

      <div className="flex items-center justify-center w-full max-w-[1260px] gap-2 sm:gap-6 mt-4 sm:mt-8">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          className="font-tertiary text-5xl sm:text-7xl lg:text-[128px] leading-none cursor-pointer text-[#6D6D6D] select-none px-1"
          aria-label="Vorige"
        >
          &lt;
        </button>

        <div className="overflow-hidden w-full py-3 sm:py-[14px]" ref={emblaRef}>
          <div className="-ml-4 sm:-ml-[30px] flex">
            {projects.map((p) => (
              <div key={p.title} className="shrink-0 basis-full flex justify-center pl-4 sm:pl-[30px]">
                <ProjectCard
                  title={p.title}
                  beforeImage={p.beforeImage}
                  afterImage={p.afterImage}
                  text={p.text}
                  afterAlt={p.afterAlt}
                  beforeAlt={p.beforeAlt}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          className="font-tertiary text-5xl sm:text-7xl lg:text-[128px] leading-none cursor-pointer text-[#6D6D6D] select-none px-1"
          aria-label="Volgende"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}