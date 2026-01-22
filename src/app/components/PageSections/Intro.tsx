import Image from "next/image";

export default function Intro() {
    return(
        <div className={'bg-white flex flex-row mt-[60px] ml-[150px] mr-[150px] place-content-between'}  id="home-section">
            <div className={'flex flex-col mr-[50px]'}>
                <h1 className={'font-tertiary text-[64px] text-[#3B3B3B]'}>Uw project, vakkundig
                    uitgevoerd</h1>
                <p className={'font-spartan font-[200] text-[40px] text-[#3B3B3B]'}>Wij denken mee, meten in en<br /> bouwen zoals het hoort.<br /> Voor kleine klussen en complete<br /> verbouwingen.</p>
            </div>
            <div className={'relative max-w-[600px] place-self-start mt-[40px]'}>
                <Image src="/main-page-image.jpg" alt="main page image" height={500} width={500} className={'z-10 relative h-auto w-full'} />
                <div className={'bg-[#9D9D9D] absolute h-full top-2 right-2 w-full z-0'}></div>
                <div className={'z-20 border-t-4 border-r-4 absolute border-r-[#3B3B3B] border-t-[#3B3B3B] bottom-2 left-2 h-full w-full'}></div>
            </div>
        </div>
    );
}