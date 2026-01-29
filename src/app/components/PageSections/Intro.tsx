import Image from "next/image";

export default function Intro() {
    return(
        <div className={'bg-white flex flex-row mt-[60px] ml-[50px] mr-[50px] place-content-between sm:mr-[150px] sm:ml-[150px]'}  id="home-section">
            <div className={'flex flex-col mr-[10px] sm:mr-[50px]'}>
                <h1 className={'font-tertiary text-[20px] text-[#3B3B3B] sm:text-[64px]'}>Uw project, vakkundig
                    uitgevoerd</h1>
                <p className={'font-spartan font-[200] text-[10px] text-[#3B3B3B] sm:text-[40px]'}>Wij denken mee, meten in en<br /> bouwen zoals het hoort.<br /> Voor kleine klussen en complete<br /> verbouwingen.</p>
            </div>
            <div className={'relative max-w-[600px] place-self-start mt-[40px]'}>
                <Image src="/main-page-image.jpg" alt="main page image" height={500} width={500} className={'z-10 relative h-auto w-full'} />
                <div className={'bg-[#9D9D9D] absolute h-full top-2 right-2 w-full z-0'}></div>
                <div className={'z-20 border-t-4 border-r-4 absolute border-r-[#3B3B3B] border-t-[#3B3B3B] bottom-2 left-2 h-full w-full'}></div>
            </div>
        </div>
    );
}