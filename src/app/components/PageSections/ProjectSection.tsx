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
        text: "Van bouwplaats naar thuis.\n Bij deze renovatie hebben wij de woonkamer volledig vernieuwd \n van vloeropbouw en timmerwerk tot de laatste afwerkdetails. Het \n resultaat: een lichte, comfortabele ruimte waarin alles klopt."
    }];


export default function ProjectSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});

    return (
        <div className={'flex flex-col items-center mt-[100px] cursor-default'}>
            <p className={'text-[#3B3B3B] text-[64px] font-tertiary '}>Projecten</p>


            <div className={'flex flex-row justify-center'}>
            <button onClick={() => emblaApi?.scrollPrev()}
                    className={'font-tertiary text-[128px] cursor-pointer text-[#6D6D6D]'}> &lt; </button>


            <div className={'overflow-hidden w-[1260px] py-[14px]'} ref={emblaRef}>
                <div className={`-ml-[30px] flex flex-row`}>
                    {projects.map((s) => (
                        <div key={s.title} className={'shrink-0 basis-full flex justify-center pl-[30px]'}>
                            <ProjectCard
                                title={s.title} beforeImage={s.beforeImage} afterImage={s.afterImage} text={s.text} afterAlt={s.afterAlt} beforeAlt={s.beforeAlt}
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