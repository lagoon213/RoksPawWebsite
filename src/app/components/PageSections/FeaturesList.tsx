export default function FeaturesList() {
  const features = [
    "Gratis adviesgesprek / inmeetservice",
    "Kwaliteitswerk met duurzame materialen",
    "Garantie op uitgevoerde werkzaamheden",
    "Heldere offertes zonder verrassingen",
    "Korte wachttijden",
  ];

  return (
    <div className="flex justify-center mt-[clamp(3rem,6vw,6.25rem)] mb-[clamp(3rem,6vw,6.25rem)] px-4 sm:px-6 lg:px-8">
      <div className="relative w-full sm:w-[92%] md:w-[88%] lg:w-[76%] xl:w-[70%] 2xl:w-[62%]">
        {/* Background card */}
        <div className="bg-[#9B9B9B] rounded-[clamp(10px,1.2vw,14px)]" />

        {/* Foreground card */}
        <div
          className="
            bg-[#EBEBEB]
            rounded-[clamp(10px,1.2vw,14px)]
            absolute
            left-[clamp(0.75rem,2vw,1.5rem)]
            bottom-[clamp(0.75rem,2vw,1.5rem)]
            right-0
            p-[clamp(1.25rem,3vw,2.5rem)]
            transition-[transform,spacing,padding]
            duration-300
            ease-out
          "
        >
          <div className="flex flex-col gap-[clamp(1rem,2.2vw,2.5rem)]">
            <p className="text-[#3B3B3B] font-tertiary text-[clamp(1.75rem,4.2vw,4rem)] leading-[1.05]">
              Wat bieden wij?
            </p>

            {features.map((text) => (
              <div
                key={text}
                className="flex items-center gap-[clamp(0.75rem,1.8vw,1.25rem)]"
              >
                <div
                  className="
                    bg-[#676767]
                    w-[clamp(1.1rem,2.2vw,2.5rem)]
                    h-[clamp(1.1rem,2.2vw,2.5rem)]
                    rounded-[clamp(6px,1vw,12px)]
                    shrink-0
                    transition-[width,height,border-radius]
                    duration-300
                    ease-out
                  "
                />

                <p className="font-spartan font-[200] text-[clamp(0.95rem,2vw,2.5rem)] leading-tight text-[#3B3B3B]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Spacer: matcht de card + offset (smooth) */}
        <div className="h-[clamp(19rem,34vw,40rem)]" />
      </div>
    </div>
  );
}