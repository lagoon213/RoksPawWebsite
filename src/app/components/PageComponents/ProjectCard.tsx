import Image from "next/image";

export default function ProjectCard({title, beforeImage, beforeAlt, afterAlt, afterImage, text}: { title: string, beforeImage: string, afterImage: string, text: string, beforeAlt: string, afterAlt: string }) {
    return(
        <div className={'flex flex-col justify-between border-5 rounded-[20px] border-[#919191] relative w-[80%] h-[900px] p-[50px]'}>
            <p className={'font-spartan font-light text-[55px]'}>{title}</p>


            <div className={'bg-[#C4C4C4] w-[500px] left-[70px] bottom-[450px] h-[300px] absolute z-0'}><Image className={'absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20'} src={beforeImage} alt={beforeAlt} width={400} height={400}></Image></div>

            <div className={'bg-[#959595] w-[500px] h-[300px] bottom-[300px] right-[70px] absolute z-10'}><Image className={'absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'} src={afterImage} alt={afterAlt} width={400} height={400}></Image></div>

            <p className={'font-spartan text-[40px] font-extralight'}>{text}</p>
        </div>
    )
}