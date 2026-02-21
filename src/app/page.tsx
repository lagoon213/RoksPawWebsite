import Intro from './components/PageSections/Intro';
import FeaturesList from "./components/PageSections/FeaturesList";
import ServiceSection from "./components/PageSections/ServiceSection";
import ContactSection from "./components/PageSections/ContactSection";
import ProjectSection from "./components/PageSections/ProjectSection";

export default function Home() {
    return (
        <>
<Intro></Intro>

<div className="place-items-center mt-8 sm:mt-[50px] flex flex-col gap-6 sm:gap-[30px]">
  <div className="border-t-2 border-t-[#3B3B3B] w-[90%] sm:w-[80%] max-w-[1100px]" />

  <div className="flex flex-row w-[90%] sm:w-[80%] max-w-[1100px] gap-3 sm:gap-[20px]">
    <div className="border-t-2 border-t-[#3B3B3B] w-[40%] ml-4 sm:ml-12 lg:ml-[100px] mt-[10px]" />

    <div className="flex flex-row gap-3 sm:gap-[20px]">
      <div className="rounded-full bg-[#3B3B3B] h-4 w-4 sm:h-6 sm:w-6" />
      <div className="rounded-full bg-[#3B3B3B] h-4 w-4 sm:h-6 sm:w-6" />
    </div>
  </div>
</div>

<FeaturesList></FeaturesList>

<div className="place-items-center mt-8 sm:mt-[50px] flex flex-col gap-6 sm:gap-[30px]" id="service-section">
  <div className="border-t-2 border-t-[#3B3B3B] w-[90%] sm:w-[80%] max-w-[1100px]" />

  <div className="flex flex-row w-[90%] sm:w-[80%] max-w-[1100px] gap-3 sm:gap-[20px] justify-center">
    <div className="rounded-full bg-[#3B3B3B] h-4 w-4 sm:h-6 sm:w-6" />
    <div className="border-t-2 border-t-[#3B3B3B] w-[40%] mt-[10px]" />
    <div className="rounded-full bg-[#3B3B3B] h-4 w-4 sm:h-6 sm:w-6" />
  </div>
</div>

<ServiceSection></ServiceSection>

<div className="place-items-center mt-8 sm:mt-[50px] flex flex-col gap-6 sm:gap-[30px]" id="contact-section">
  <div className="border-t-2 border-t-[#3B3B3B] w-[90%] sm:w-[80%] max-w-[1100px]" />

  <div className="flex flex-row justify-end w-[90%] sm:w-[80%] max-w-[1100px] gap-3 sm:gap-[20px]">
    <div className="flex flex-row gap-3 sm:gap-[20px]">
      <div className="rounded-full bg-[#3B3B3B] h-4 w-4 sm:h-6 sm:w-6" />
      <div className="rounded-full bg-[#3B3B3B] h-4 w-4 sm:h-6 sm:w-6" />
    </div>

    <div className="border-t-2 border-t-[#3B3B3B] w-[40%] mr-4 sm:mr-12 lg:mr-[100px] mt-[10px]" />
  </div>
</div>

<ContactSection></ContactSection>

<div className="place-items-center mt-8 sm:mt-[50px] flex flex-col gap-6 sm:gap-[30px]" id="project-section">
  <div className="border-t-2 border-t-[#3B3B3B] w-[90%] sm:w-[80%] max-w-[1100px]" />

  <div className="flex flex-row justify-center w-[90%] sm:w-[80%] max-w-[1100px] gap-3 sm:gap-[20px]">
    <div className="border-t-2 border-t-[#3B3B3B] w-[20%] mt-[10px]" />

    <div className="flex flex-row gap-3 sm:gap-[20px]">
      <div className="rounded-full bg-[#3B3B3B] h-4 w-4 sm:h-6 sm:w-6" />
      <div className="rounded-full bg-[#3B3B3B] h-4 w-4 sm:h-6 sm:w-6" />
    </div>

    <div className="border-t-2 border-t-[#3B3B3B] w-[20%] mt-[10px]" />
  </div>
</div>

{/*<ProjectSection></ProjectSection>

<div className="place-items-center mt-8 sm:mt-[50px] flex flex-col gap-6 sm:gap-[30px]">
  <div className="border-t-2 border-t-[#3B3B3B] w-[90%] sm:w-[80%] max-w-[1100px]" />

  <div className="flex flex-row w-[90%] sm:w-[80%] max-w-[1100px] gap-3 sm:gap-[20px] justify-center">
    <div className="border-t-2 border-t-[#3B3B3B] w-[40%] mt-[10px]" />
  </div>
</div>*/}
        </>
    );
}
