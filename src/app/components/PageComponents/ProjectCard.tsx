import Image from "next/image";

export default function ProjectCard({
  title,
  beforeImage,
  beforeAlt,
  afterAlt,
  afterImage,
  text,
}: {
  title: string;
  beforeImage: string;
  afterImage: string;
  text: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  return (
    <div
      className="flex flex-col border-[5px] rounded-[20px] border-[#919191] relative
                 w-full max-w-[1100px]
                 h-[470px] sm:h-[740px] lg:h-[1000px] 
                 p-5 sm:p-8 lg:p-[50px] "
    >
      <p className="font-spartan font-light text-2xl sm:text-4xl lg:text-[55px]">
        {title}
      </p>

      {/* Image stack area */}
<div className="relative w-full mb-12 mt-2 flex sm:mt-6">
  <div className="sm:hidden relative w-full h-[170px]">
    {/* BEFORE */}
    <div className="bg-[#C4C4C4] absolute z-0
                    w-[190px] h-[120px] left-0 top-0">
      <Image
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                   w-[160px] h-auto"
        src={beforeImage}
        alt={beforeAlt}
        width={400}
        height={400}
      />
    </div>

    {/* AFTER */}
    <div className="bg-[#959595] absolute z-10
                    w-[190px] h-[120px] right-0 top-[90px]">
      <Image
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                   w-[160px] h-auto"
        src={afterImage}
        alt={afterAlt}
        width={400}
        height={400}
      />
    </div>
  </div>

  <div className="hidden mb-[380px] sm:block lg:mb-[450px]">
    {/* BEFORE */}
    <div
      className="bg-[#C4C4C4] absolute z-0
                 w-[380px] h-[230px] left-6 top-6
                 lg:w-[500px] lg:h-[300px] lg:left-[70px] lg:top-[40px]"
    >
      <Image
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20
                   w-[320px] lg:w-[400px] h-auto"
        src={beforeImage}
        alt={beforeAlt}
        width={400}
        height={400}
      />
    </div>

    {/* AFTER */}
    <div
      className="bg-[#959595] absolute z-10
                 w-[380px] h-[230px] right-6 top-[170px]
                 lg:w-[500px] lg:h-[300px] lg:right-[70px] lg:top-[190px]"
    >
      <Image
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                   w-[320px] lg:w-[400px] h-auto"
        src={afterImage}
        alt={afterAlt}
        width={400}
        height={400}
      />
    </div>
  </div>
</div>

      <p className="font-spartan font-extralight whitespace-pre-line
                    text-sm sm:text-[23px] lg:text-[40px]
                    leading-snug mt-4">
        {text}
      </p>
    </div>
  );
}