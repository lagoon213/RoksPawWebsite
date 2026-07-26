import type {Metadata} from "next";
import Image from "next/image";
import ContactSection from "./components/PageSections/ContactSection";

export const metadata: Metadata = {
  title: "Timmerwerk in Tilburg",
  description: "RoksPaw Timmermannen verzorgt timmerwerk, renovatie, isolatie, vloeren en afwerking in Tilburg en omgeving.",
  alternates: {
    canonical: "/",
  },
};

const services = [
  {
    image: "/Roof-works-image.jpg",
    alt: "Daken",
    title: "Daken",
    description: "Herstel, onderhoud en kleine renovaties aan daken, boeiboorden en goten.",
  },
  {
    image: "/Wood-works-image.jpg",
    alt: "Houtwerken",
    title: "Houtwerken",
    description: "Maatwerk in hout voor binnen en buiten, van constructies tot afwerking.",
  },
  {
    image: "/Floor-works-image.jpg",
    alt: "Vloeren",
    title: "Vloeren",
    description: "Plaatsing van houten, laminaat en pvc vloeren inclusief plinten en afwerking.",
  },
  {
    image: "/Insulation-works-image.jpg",
    alt: "Isolatie",
    title: "Isolatie",
    description: "Isoleren van vloeren, daken en wanden voor meer comfort en energiebesparing.",
  },
  {
    image: "/Small-repairs-image.jpg",
    alt: "Klein timmerwerk",
    title: "Klein timmerwerk",
    description: "Snelle en praktische hulp bij kleinere timmerklussen in en rond het huis.",
  },
  {
    image: "/Paint-works-image.jpg",
    alt: "Schilderwerk",
    title: "Schilderwerk",
    description: "Binnen- en buitenschilderwerk met goede voorbereiding voor een duurzaam resultaat.",
  },
  {
    image: "/Finishes-image.jpg",
    alt: "Afwerking",
    title: "Afwerking",
    description: "Net en volledig afronden van renovaties en bouwprojecten met oog voor detail.",
  },
];

const tapeTicks = Array.from({ length: 117 }, (_, index) => index * 10);

export default function Home() {
    const metrics = [
        { value: "0–1 dag", label: "Reactietijd op een aanvraag" },
        { value: "€ 0,-", label: "Kosten voor het adviesgesprek" },
        { value: "Vast", label: "Offerte, geen verrassingen achteraf" },
        { value: "Tilburg", label: "En regio, Besoijenstraat 22" },
        { value: "Garantie", label: "Op alle uitgevoerde werkzaamheden" },
    ];

    return (
        <main className="overflow-hidden">
        <section className="bg-[#1E1B16] pt-12 text-[#F3ECDB] sm:pt-16" id="home">
          <div className="mx-auto grid max-w-[1160px] gap-10 px-4 pb-0 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pt-6">
              <div>
                <div className="inline-flex items-center gap-2 font-secondary text-[0.72rem] uppercase tracking-[0.18em] text-[#A8452D]">
                  <span className="h-[2px] w-5 bg-[#A8452D]" />
                  Timmerwerk uit Tilburg
                </div>
                <h1 className="mt-4 max-w-[10ch] font-tertiary text-[clamp(2.35rem,11vw,4.9rem)] leading-[0.92] tracking-[-0.02em] sm:max-w-[11ch] sm:text-[clamp(2.8rem,5vw,4.9rem)]">
                  Uw project, vakkundig <em className="not-italic text-[#D9A441]">uitgevoerd</em>.
                </h1>
                <p className="mt-5 max-w-[42ch] text-[0.98rem] leading-7 text-[#F3ECDB]/78 sm:mt-6 sm:max-w-[46ch] sm:text-[1.05rem] sm:leading-8">
                  Wij denken mee, meten in en bouwen zoals het hoort. Van een enkele reparatie tot een complete verbouwing, recht werk en heldere afspraken.
                </p>
                <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                  <a href="#contact" className="inline-flex w-full justify-center rounded-sm bg-[#A8452D] px-5 py-3 text-sm font-semibold text-[#F3ECDB] transition hover:bg-[#8f3a23] sm:w-auto">
                    Gratis inmeetservice aanvragen
                  </a>
                  <a href="#diensten" className="inline-flex w-full justify-center rounded-sm border border-[#F3ECDB]/25 px-5 py-3 text-sm font-semibold text-[#F3ECDB] transition hover:border-[#D9A441] hover:text-[#D9A441] sm:w-auto">
                    Bekijk diensten
                  </a>
                </div>
              </div>

              <div className="relative pb-0 sm:pb-6">
                <div className="relative overflow-hidden rounded-sm border-2 border-[#D9A441] p-2 shadow-[0_24px_60px_rgba(0,0,0,0.35)] rotate-[1.2deg]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
                    <Image src="/main-page-image.jpg" alt="RoksPaw aan het werk" fill priority className="object-cover" />
                  </div>
                </div>
                <div className="relative mt-4 max-w-[220px] rotate-[-2deg] rounded-sm bg-[#D9A441] px-4 py-3 text-[#1E1B16] shadow-[0_14px_30px_rgba(0,0,0,0.35)] sm:absolute sm:-bottom-4 sm:-left-4 sm:mt-0">
                  <div className="font-tertiary text-[1.7rem] leading-none">85712116</div>
                  <div className="mt-1 font-secondary text-[0.68rem] uppercase tracking-[0.12em]">KvK — Tilburg</div>
                </div>
              </div>
            </div>

            <div className="mt-12 h-[34px] bg-[#D9A441] sm:mt-14 sm:h-[46px]">
              <svg viewBox="0 0 1160 46" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <g stroke="#1E1B16" strokeWidth="2">
                  {tapeTicks.map((tick) => {
                    const isBig = tick % 100 === 0;
                    const isMid = tick % 50 === 0;
                    const height = isBig ? 26 : isMid ? 16 : 9;

                    return (
                      <g key={tick}>
                        <line x1={tick} y1="46" x2={tick} y2={46 - height} />
                        {isBig ? (
                          <text x={tick + 4} y="16" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#1E1B16" stroke="none">
                            {tick / 10}
                          </text>
                        ) : null}
                      </g>
                    );
                  })}
                </g>
              </svg>
            </div>
          </section>

          <section className="border-b border-[#2B2620]/10 bg-[#EFE6CF]">
            <div className="mx-auto grid max-w-[1160px] gap-px sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Gratis adviesgesprek en inmeetservice",
                "Kwaliteitswerk met duurzame materialen",
                "Garantie op uitgevoerde werkzaamheden",
                "Heldere offertes zonder verrassingen",
                "Korte wachttijden",
              ].map((item, index) => (
                    <div key={item} className="min-h-[92px] border-b border-dashed border-[#2B2620]/20 px-5 py-6 text-[0.92rem] leading-6 text-[#2B2620] last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:py-7 sm:last:border-r-0">
                      <span className="mb-2 block font-secondary text-[0.68rem] uppercase tracking-[0.16em] text-[#A8452D] sm:text-[0.7rem]">
                    0{index + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#F3ECDB] py-16 text-[#1E1B16] sm:py-24" id="diensten">
            <div className="mx-auto max-w-[1160px] px-4 sm:px-8 lg:px-8">
              <div className="max-w-[640px]">
                <div className="inline-flex items-center gap-2 font-secondary text-[0.72rem] uppercase tracking-[0.18em] text-[#A8452D]">
                  <span className="h-[2px] w-5 bg-[#A8452D]" />
                  Diensten
                </div>
                <h2 className="mt-4 font-tertiary text-[clamp(2.1rem,3.8vw,3.2rem)] leading-[0.98]">
                  Zeven vakgebieden, één aanspreekpunt.
                </h2>
                <p className="mt-4 max-w-[52ch] text-[1rem] leading-7 text-[#2B2620]/78">
                  Van dak tot afwerking: elk onderdeel krijgt dezelfde aandacht, dezelfde nette afwerking en dezelfde duidelijke communicatie.
                </p>
              </div>

              <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                {services.map((service, index) => (
                  <article key={service.title} className="overflow-hidden rounded-md border border-[#2B2620]/10 bg-[#1E1B16] pt-6 text-[#F3ECDB] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)]">
                    <div className="mx-auto mb-4 h-3 w-3 rounded-full bg-[#D9A441] shadow-[inset_0_2px_3px_rgba(0,0,0,0.35)]" />
                    <div className="mx-4 overflow-hidden rounded-sm">
                      <div className="relative aspect-[4/3]">
                        <Image src={service.image} alt={service.alt} fill className="object-cover transition duration-500 hover:scale-[1.05]" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="font-secondary text-[0.7rem] uppercase tracking-[0.14em] text-[#D9A441]">
                        0{index + 1} / {service.title}
                      </div>
                      <h3 className="mt-2 font-tertiary text-[1.55rem] leading-tight">{service.title}</h3>
                      <p className="mt-3 text-[0.95rem] leading-7 text-[#F3ECDB]/72">{service.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#1E1B16] py-16 text-[#F3ECDB] sm:py-24">
            <div className="mx-auto max-w-[1160px] px-4 sm:px-8 lg:px-8">
              <div className="max-w-[640px]">
                <div className="inline-flex items-center gap-2 font-secondary text-[0.72rem] uppercase tracking-[0.18em] text-[#D9A441]">
                  <span className="h-[2px] w-5 bg-[#D9A441]" />
                  Waarom RoksPaw
                </div>
                <h2 className="mt-4 font-tertiary text-[clamp(2.1rem,3.8vw,3.2rem)] leading-[0.98]">
                  Gemeten, niet geschat.
                </h2>
                <p className="mt-4 text-[1rem] leading-7 text-[#F3ECDB]/74">
                  Voordat er één plank wordt gezaagd, komen we langs om precies in te meten. Geen verrassingen achteraf: de offerte die u krijgt is de prijs die u betaalt.
                </p>
              </div>

              <div className="mt-12 grid border-y border-[#F3ECDB]/12 sm:grid-cols-2 lg:grid-cols-5">
                {metrics.map((metric) => (
                  <div key={metric.value} className="border-b border-[#F3ECDB]/12 px-4 py-6 text-left last:border-b-0 sm:border-r sm:px-4 sm:py-8 sm:text-center sm:last:border-r-0">
                    <div className="font-tertiary text-[1rem] text-[#D9A441] sm:text-[1.05rem]">{metric.value}</div>
                    <div className="mt-1.5 text-sm leading-6 text-[#F3ECDB]/52 sm:mt-2">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ContactSection />
        </main>
    );
}
