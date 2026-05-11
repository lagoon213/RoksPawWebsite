import Image from "next/image";

export default function ServiceCard({
  image,
  alt,
  title,
  description,
}: {
  image: string;
  alt: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative cursor-default mx-auto w-[280px] h-[300px] sm:w-[340px] sm:h-[470px] lg:w-[400px] lg:h-[500px]">
      {/* top line */}
      <div className="bg-[#6C6C6C] h-[2px] w-[140px] sm:w-[160px] lg:w-[180px] absolute -top-[10px] left-1/2 -translate-x-1/2" />

      {/* card bg */}
      <div className="bg-[#D9D9D9] border-t-4 border-b-4 border-[#6C6C6C] w-full h-full rounded-[2px]" />

      {/* image */}
      <Image
        src={image}
        width={500}
        height={500}
        alt={alt}
        className="absolute object-cover border-[#6C6C6C] border-4 rounded-tl-[10px] rounded-br-[10px] w-[240px] h-[140px] left-[20px] top-[22px] sm:w-[300px] sm:h-[170px] sm:left-[20px] sm:top-[26px] lg:w-[350px] lg:h-[200px] lg:left-[25px] lg:top-[30px]"
      />

      {/* title */}
      <p className="font-spartan font-[500] absolute left-1/2 -translate-x-1/2 text-center whitespace-nowrap text-[22px] top-[180px] sm:text-[28px] sm:top-[255px] lg:text-[36px] lg:top-[300px]">
        {title}
      </p>

      {/* description */}
      <p className="font-spartan font-[200] absolute left-1/2 -translate-x-1/2 text-center whitespace-pre-line w-[90%] text-[12px] top-[220px] sm:text-[16px] sm:top-[300px] lg:text-[20px] lg:top-[350px]">
        {description}
      </p>

      {/* bottom line */}
      <div className="bg-[#6C6C6C] h-[2px] w-[140px] sm:w-[160px] lg:w-[180px] absolute -bottom-[10px] left-1/2 -translate-x-1/2" />
    </div>
  );
}