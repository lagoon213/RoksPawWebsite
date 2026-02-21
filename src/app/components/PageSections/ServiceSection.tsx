'use client';
import ServiceCard from "@/app/components/PageComponents/ServiceCard";
import useEmblaCarousel from "embla-carousel-react";

const services = [
    {
        image: "/Roof-works-image.jpg",
        alt: "Image of roof construction",
        title: "Daken",
        description: "Herstel onderhoud en kleine renovaties \n aan daken, boeiboorden en goten."
    },
    {
        image: "/Wood-works-image.jpg",
        alt: "Image of wood works",
        title: "Houtwerken",
        description: "Uitvoering van diverse houtconstructies \n voor binnen en buiten, inclusief \n maatwerkoplossingen."
    },
    {
        image: "/Floor-works-image.jpg",
        alt: "Image of floor placing",
        title: "Vloeren",
        description: "Plaatsing van houten, laminaat en pvc \n vloeren, inclusief plinten en afwerking."
    },
    {
        image: "/Insulation-works-image.jpg",
        alt: "Image of insulation",
        title: "Isolatie",
        description: "Isoleren van vloeren, daken en wanden \n voor energiebesparing en meer \n wooncomfort."
    },
    {
        image: "/Small-repairs-image.jpg",
        alt: "Image of door repair",
        title: "Klein timmerwerk",
        description: "Snelle en praktische hulp bij kleinere \n timmerklussen in en rond het huis."
    },
    {
        image: "/Paint-works-image.jpg",
        alt: "Image of painting",
        title: "Schilderwerk",
        description: "Binnen- en buitenschilderwerk, inclusief \n voorbereiding voor een duurzaam \n resultaat."
    },
    {
        image: "/Finishes-image.jpg",
        alt: "Image of plastering wall",
        title: "Afwerking",
        description: "Net en volledig afronden van \n renovaties en bouwprojecten, met \n aandacht voor detail."
    }
];

export default function FeaturesList() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className="flex flex-col mt-12 sm:mt-[100px] mb-12 sm:mb-[100px] items-center gap-6 sm:gap-[40px] cursor-default px-4">
      <p className="text-[#3B3B3B] text-2xl sm:text-4xl lg:text-[64px] font-tertiary">
        Diensten
      </p>

      <div className="flex items-center gap-2 sm:gap-[20px] w-full max-w-[1260px]">
        {/* Prev */}
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          className="font-tertiary text-5xl sm:text-7xl lg:text-[128px] leading-none cursor-pointer text-[#6D6D6D] select-none px-1"
          aria-label="Vorige"
        >
          &lt;
        </button>

        {/* Viewport */}
        <div className="overflow-hidden w-full py-3 sm:py-[14px]" ref={emblaRef}>
          <div className="-ml-4 sm:-ml-[30px] flex">
            {services.map((s) => (
              <div
                key={s.title}
                className="shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 pl-4 sm:pl-[30px]"
              >
                <ServiceCard
                  image={s.image}
                  alt={s.alt}
                  title={s.title}
                  description={s.description}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next */}
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