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
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});

    return (
        <div className={'flex flex-col mt-[100px] mb-[100px] items-center gap-[40px] cursor-default'}>
            <p className={'text-[#3B3B3B] text-[64px] font-tertiary'}>Diensten</p>

            <div className={'flex flex-row gap-[20px]'}>
                <button onClick={() => emblaApi?.scrollPrev()}
                        className={'font-tertiary text-[128px] cursor-pointer text-[#6D6D6D]'}> &lt; </button>

                <div className={'overflow-hidden w-[1260px] py-[14px]'} ref={emblaRef}>
                    <div className={`-ml-[30px] flex flex-row`}>
                        {services.map((s) => (
                            <div key={s.title} className={'shrink-0 basis-1/3 pl-[30px]'}>
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

                <button onClick={() => emblaApi?.scrollNext()}
                        className={'font-tertiary text-[128px] cursor-pointer text-[#6D6D6D]'}> &gt; </button>
            </div>
        </div>
    );
}