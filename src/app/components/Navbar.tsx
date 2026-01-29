import Image from "next/image"

export default function Navbar() {
    return(
           <div className={"flex bg-white text-black h-30 sticky top-0 z-50 cursor-default"} >
               <Image src="/logo_RoksPaw.png" alt="logo of the company" height={100} width={100} className={'object-none ml-[30px] h-[50px] w-[50px] sm:h-[100px] w-[100px]'} />
               <div className={" flex-col leading-none mt-[30px] ml-[30px]"}>
                <h1 className={'font-brand text-[30px] sm:text-[64px]'}>RoksPaw</h1>
                <h2 className={'font-secondary justify-self-center'}>Timmermannen</h2>
               </div>

               <div className={"font-main flex gap-[60px] flex-1 self-end ml-[50px] mb-[20px]"}>
                <a className={'cursor-pointer hover:underline'} href="#home-section">Home</a>
                <a className={'cursor-pointer hover:underline'} href="#service-section">Diensten</a>
                <a className={'cursor-pointer hover:underline'} href="#project-section">Projecten</a>
               </div>

               <div className={'mr-[40px] flex items-center'}>
                   <a href="#contact-section">
                <button className={'font-main bg-[#D9D9D9] p-[15px] px-[50px] rounded-sm cursor-pointer hover:bg-[#A6A6A6]'}>Contact</button>
                   </a>
               </div>
           </div>
    );
}