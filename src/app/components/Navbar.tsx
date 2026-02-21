import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white text-black cursor-default border-b border-black/10">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex items-center justify-between py-[clamp(0.75rem,1.8vw,1.25rem)]">
          {/* Brand */}
          <div className="flex items-center gap-[clamp(0.6rem,1.2vw,1.25rem)]">
            <Image
              src="/logo_RoksPaw.png"
              alt="logo of the company"
              width={140}
              height={140}
              className="object-contain w-[clamp(44px,5.2vw,110px)] h-[clamp(44px,5.2vw,110px)]"
              priority
            />

            <div className="leading-none">
              <h1 className="font-brand text-[clamp(1.15rem,2.6vw,3.1rem)]">
                RoksPaw
              </h1>
              <h2 className="font-secondary text-[clamp(0.75rem,1.1vw,1.1rem)] opacity-90">
                Timmermannen
              </h2>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center justify-center gap-[clamp(1rem,2.2vw,3.5rem)] font-main text-[clamp(0.95rem,1.15vw,1.25rem)]">
            <a className="hover:underline underline-offset-4" href="#home-section">
              Home
            </a>
            <a className="hover:underline underline-offset-4" href="#service-section">
              Diensten
            </a>
            <a className="hover:underline underline-offset-4" href="#project-section">
              Projecten
            </a>
          </nav>

          {/* CTA */}
          <a href="#contact-section" className="shrink-0">
            <button
              className="
                font-main
                bg-[#D9D9D9] hover:bg-[#A6A6A6]
                rounded-[10px]
                px-[clamp(0.75rem,1.6vw,3rem)]
                py-[clamp(0.55rem,1vw,0.95rem)]
                text-[clamp(0.8rem,1.05vw,1.25rem)]
                transition
              "
            >
              Contact
            </button>
          </a>
        </div>

        {/* Mobile nav row */}
        <nav className="md:hidden pb-[clamp(0.6rem,1.4vw,1rem)] font-main">
          <div className="flex justify-center gap-[clamp(0.9rem,6vw,2.2rem)] text-[clamp(0.9rem,3.8vw,1.05rem)]">
            <a className="hover:underline underline-offset-4" href="#home-section">
              Home
            </a>
            <a className="hover:underline underline-offset-4" href="#service-section">
              Diensten
            </a>
            <a className="hover:underline underline-offset-4" href="#project-section">
              Projecten
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}