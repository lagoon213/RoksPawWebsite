import Intro from './components/PageSections/Intro';
import FeaturesList from "./components/PageSections/FeaturesList";
import ServiceSection from "./components/PageSections/ServiceSection";
import ContactSection from "./components/PageSections/ContactSection";
import ProjectSection from "./components/PageSections/ProjectSection";

export default function Home() {
    return (
        <>
            <Intro></Intro>
            <div className={'place-items-center mt-[50px] flex flex-col gap-[30px]'} >
                <div className={'border-t-2 border-t-[#3B3B3B] w-[80%] '}></div>

                <div className={'flex flex-row w-[80%] gap-[20px]'}>
                    <div className={'border-t-2 border-t-[#3B3B3B] w-[40%] ml-[100px] mt-[10px]'}></div>

                    <div className={'flex flex-row gap-[20px] '}>
                        <div className={'rounded-full bg-[#3B3B3B] h-6 w-6'}></div>
                        <div className={'rounded-full bg-[#3B3B3B] h-6 w-6'}></div>
                    </div>
                </div>
            </div>
            <FeaturesList></FeaturesList>
            <div className={'place-items-center mt-[50px] flex flex-col gap-[30px]'} id="service-section">
                <div className={'border-t-2 border-t-[#3B3B3B] w-[80%] '}></div>

                <div className={'flex flex-row w-[80%] gap-[20px] justify-center'}>
                    <div className={'rounded-full bg-[#3B3B3B] h-6 w-6'}></div>
                    <div className={'border-t-2 border-t-[#3B3B3B] w-[40%] mt-[10px]'}></div>
                    <div className={'rounded-full bg-[#3B3B3B] h-6 w-6'}></div>
                </div>
            </div>
            <ServiceSection></ServiceSection>
            <div className={'place-items-center mt-[50px] flex flex-col gap-[30px]'} id="contact-section">
                <div className={'border-t-2 border-t-[#3B3B3B] w-[80%] '}></div>

                <div className={'flex flex-row justify-end w-[80%] gap-[20px]'}>
                    <div className={'flex flex-row gap-[20px] '}>
                        <div className={'rounded-full bg-[#3B3B3B] h-6 w-6'}></div>
                        <div className={'rounded-full bg-[#3B3B3B] h-6 w-6'}></div>
                    </div>
                    <div className={'border-t-2 border-t-[#3B3B3B] w-[40%] mr-[100px] mt-[10px]'}></div>
                </div>
            </div>
            <ContactSection></ContactSection>
            <div className={'place-items-center mt-[50px] flex flex-col gap-[30px]'} id="project-section">
                <div className={'border-t-2 border-t-[#3B3B3B] w-[80%] '}></div>

                <div className={'flex flex-row justify-center w-[80%] gap-[20px]'}>
                    <div className={'border-t-2 border-t-[#3B3B3B] w-[20%] mt-[10px]'}></div>

                    <div className={'flex flex-row gap-[20px] '}>
                        <div className={'rounded-full bg-[#3B3B3B] h-6 w-6'}></div>
                        <div className={'rounded-full bg-[#3B3B3B] h-6 w-6'}></div>
                    </div>
                    <div className={'border-t-2 border-t-[#3B3B3B] w-[20%] mt-[10px]'}></div>
                </div>
            </div>
            <ProjectSection></ProjectSection>
            <div className={'place-items-center mt-[50px] flex flex-col gap-[30px]'}>
                <div className={'border-t-2 border-t-[#3B3B3B] w-[80%] '}></div>

                <div className={'flex flex-row w-[80%] gap-[20px] justify-center'}>
                    <div className={'border-t-2 border-t-[#3B3B3B] w-[40%] mt-[10px]'}></div>
                </div>
            </div>
        </>
    );
}
