import Image from "next/image";


export default function ServiceCard({image, alt, title, description}: {
    image: string,
    alt: string,
    title: string,
    description: string
}) {
    return (
        <div className={'flex flex-row relative cursor-default' }>
            <div
                className={'bg-[#6C6C6C] h-[2px] w-[180px] absolute -top-[10px] left-1/2 -translate-1/2'}></div>

            <div
                className={'bg-[#D9D9D9] border-t-5 border-t-[#6C6C6C] border-b-5 border-b-[#6C6C6C] h-[500px] w-[400px] relative'}></div>
            <Image src={image} width={500} height={500} alt={alt}
                   className={'absolute w-[350px] h-[200px] rounded-tl-[10px] rounded-br-[10px] top-[30px] left-[25px] border-[#6C6C6C] border-4 object-cover'}/>
            <p className={'text-[36px] font-spartan font-[500] absolute top-[300px] left-1/2 -translate-x-1/2 whitespace-nowrap'}>{title}</p>
            <p className={'text-[20px] font-spartan font-[200] absolute top-[350px] w-full text-center whitespace-pre-line'}>{description}</p>

            <div
                className={'bg-[#6C6C6C] h-[2px] w-[180px] absolute -bottom-[10px] left-1/2 -translate-1/2'}></div>
        </div>
    )
}