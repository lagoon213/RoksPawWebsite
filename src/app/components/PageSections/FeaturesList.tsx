

export default function FeaturesList() {
    return(
        <div className={'flex justify-center mt-[100px] mb-[100px]'}>
            <div className={"bg-[#9B9B9B] w-[70%] h-[700px] rounded-[10px] relative"}>
                <div className={"bg-[#EBEBEB] w-full h-full rounded-[10px] absolute bottom-4 left-4 p-[50px] pl-[100px] "}>
                    <div className={'flex flex-col gap-[40px]'}>
                        <p className={'text-[#3B3B3B] text-[64px] font-tertiary'}>Wat bieden wij?</p>
                        <div className={"flex flex-row gap-[20px]"}>
                            <div className={'bg-[#676767] w-[40px] h-[40px] rounded-[10px]'}></div>
                            <p className={'font-spartan text-[40px] font-[200] '}>Gratis adviesgesprek / inmeetservice</p>
                        </div>
                        <div className={"flex flex-row gap-[20px]"}>
                            <div className={'bg-[#676767] w-[40px] h-[40px] rounded-[10px]'}></div>
                            <p className={'font-spartan text-[40px] font-[200] '}>Kwaliteitswerk met duurzame materialen</p>
                        </div>
                        <div className={"flex flex-row gap-[20px]"}>
                            <div className={'bg-[#676767] w-[40px] h-[40px] rounded-[10px]'}></div>
                            <p className={'font-spartan text-[40px] font-[200] '}>Garantie op uitgevoerde werkzaamheden</p>
                        </div>
                        <div className={"flex flex-row gap-[20px]"}>
                            <div className={'bg-[#676767] w-[40px] h-[40px] rounded-[10px]'}></div>
                            <p className={'font-spartan text-[40px] font-[200] '}>Heldere offertes zonder verrassingen</p>
                        </div>
                        <div className={"flex flex-row gap-[20px]"}>
                            <div className={'bg-[#676767] w-[40px] h-[40px] rounded-[10px]'}></div>
                            <p className={'font-spartan text-[40px] font-[200] '}>Korte wachttijden</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}