import Link from "next/link";
export default function Footer(){
    return(
        <div className={'bg-[#D9D9D9] w-full h-[500px] mt-[100px] overflow-hidden relative cursor-default'}>

            <div className={'flex flex-col items-center absolute left-1/2 -translate-x-1/2 text-[#A4A4A4] opacity-[34%] leading-none -top-[-30px]'}>
            <p className={'font-brand  text-[140px] tracking-[70]'}>RoksPaw</p>
            <p className={'font-secondary text-[60px]'}>Timmermannen</p>
            </div>


            <div className={'flex flex-col font-main p-[150px] text-[#3E3E3E] gap-[70px]'}>
                <div className={'grid grid-cols-3 gap-y-[50px]'}>
                    <div >
                        <p className={'font-semibold text-[32px]'}>Adres</p>
                        <p>Besoijenstraat 22, Tilburg</p>
                        <p>5043WX </p>
                    </div>

                    <div className={'flex flex-row gap-[50px] justify-self-center translate-y-[20px] self-end text-[20px] underline decoration-solid'}>
                        <a className={'cursor-pointer hover:text-white'} href="#home-section">Home</a>
                        <a className={'cursor-pointer hover:text-white'} href="#service-section">Diensten</a>
                        <a className={'cursor-pointer hover:text-white'} href="#project-section">Projecten</a>
                        <a className={'cursor-pointer hover:text-white'} href="#contact-section">Contact</a>
                    </div>

                    <div className={'flex flex-col justify-self-end'}>
                        <p className={'font-semibold text-[32px]'}>Juridisch</p>
                        <Link href="/privacy" className={'cursor-pointer underline hover:text-white z-10'}>privacyverklaring</Link>
                        <a className={'cursor-pointer underline hover:text-white'}>algemene voorwaarden</a>
                    </div>

                    <div className={'flex flex-col col-span-2'}>
                        <p className={'font-semibold text-[32px]'}>Contact</p>
                        <a className={'underline cursor-pointer hover:text-white'} href='mailto:pawelstandowicz@gmail.com' >pawelstandowicz@gmail.com</a>
                        <a className={'underline cursor-pointer hover:text-white'} href='tel:+31 6 25344505'>+31 6 25344505</a>
                    </div>

                    <div className={'flex flex-col justify-self-end'}>
                        <p className={'font-semibold text-[32px]'}>Bedrijf</p>
                        <p>Bedrijfsnaam: RoksPaw</p>
                        <p>KvK: 85712116</p>
                    </div>
                </div>

                <p className={' flex justify-center'}>© 2026 RoksPaw Timmerwerken. Alle rechten voorbehouden.</p>
            </div>

        </div>
    )
}
