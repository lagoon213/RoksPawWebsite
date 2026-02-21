import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#D9D9D9] w-full mt-[clamp(3rem,6vw,6.25rem)] overflow-hidden relative cursor-default">
      {/* Watermark */}
      <div className="pointer-events-none select-none absolute inset-0 z-0 flex items-center justify-center opacity-[0.22] sm:opacity-[0.34]">
        <div className="-rotate-[60deg] sm:rotate-0 origin-center translate-y-6 sm:translate-y-0 text-center">
          <p className="font-brand text-[#A4A4A4] whitespace-nowrap tracking-[0.28em] sm:tracking-[0.4em] text-[clamp(3.8rem,8vw,8.75rem)]">
            RoksPaw
          </p>
          <p className="font-secondary text-[#A4A4A4] whitespace-nowrap text-[clamp(1.6rem,3.2vw,3.75rem)]">
            Timmermannen
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 py-[clamp(2.5rem,5vw,6rem)]">
        <div className="font-main text-[#3E3E3E] grid grid-cols-1 md:grid-cols-3 gap-y-[clamp(1.75rem,3.5vw,3.5rem)] gap-x-[clamp(1.25rem,3vw,4rem)]">
          {/* Adres */}
          <div className="md:col-start-1 md:row-start-1">
            <p className="font-semibold text-[clamp(1.25rem,1.8vw,2rem)]">Adres</p>
            <p className="text-[clamp(1rem,1.1vw,1.125rem)]">Besoijenstraat 22, Tilburg</p>
            <p className="text-[clamp(1rem,1.1vw,1.125rem)]">5043WX</p>
          </div>

          {/* Nav */}
          <div className="md:col-start-2 md:row-start-1 md:text-center md:justify-self-center md:translate-y-[clamp(0rem,0.6vw,0.6rem)]">
            <div className="flex flex-wrap md:flex-nowrap justify-start md:justify-center gap-x-[clamp(1.25rem,3vw,3.5rem)] gap-y-3 underline decoration-solid text-[clamp(1rem,1.2vw,1.25rem)]">
              <a className="cursor-pointer hover:text-white transition" href="#home-section">
                Home
              </a>
              <a className="cursor-pointer hover:text-white transition" href="#service-section">
                Diensten
              </a>
              <a className="cursor-pointer hover:text-white transition" href="#project-section">
                Projecten
              </a>
              <a className="cursor-pointer hover:text-white transition" href="#contact-section">
                Contact
              </a>
            </div>
          </div>

          {/* Juridisch */}
          <div className="flex flex-col md:col-start-3 md:row-start-1 md:justify-self-end">
            <p className="font-semibold text-[clamp(1.25rem,1.8vw,2rem)]">Juridisch</p>
            <Link
              href="/privacy"
              className="cursor-pointer underline hover:text-white transition text-[clamp(1rem,1.1vw,1.125rem)]"
            >
              privacyverklaring
            </Link>
            <Link
              href="/rights"
              className="cursor-pointer underline hover:text-white transition text-[clamp(1rem,1.1vw,1.125rem)]"
            >
              algemene voorwaarden
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col md:col-start-1 md:row-start-2">
            <p className="font-semibold text-[clamp(1.25rem,1.8vw,2rem)]">Contact</p>
            <a
              className="underline cursor-pointer hover:text-white transition text-[clamp(1rem,1.1vw,1.125rem)]"
              href="mailto:pawelstandowicz@gmail.com"
            >
              pawelstandowicz@gmail.com
            </a>
            <a
              className="underline cursor-pointer hover:text-white transition text-[clamp(1rem,1.1vw,1.125rem)]"
              href="tel:+31625344505"
            >
              +31 6 25344505
            </a>
          </div>

          {/* Bedrijf */}
          <div className="flex flex-col md:col-start-3 md:row-start-2 md:justify-self-end">
            <p className="font-semibold text-[clamp(1.25rem,1.8vw,2rem)]">Bedrijf</p>
            <p className="text-[clamp(1rem,1.1vw,1.125rem)]">Bedrijfsnaam: RoksPaw</p>
            <p className="text-[clamp(1rem,1.1vw,1.125rem)]">KvK: 85712116</p>
          </div>
        </div>

        <div className="mt-[clamp(2rem,4vw,3.5rem)]">
          <p className="flex justify-center text-center text-[clamp(0.9rem,1vw,1.05rem)] text-[#3E3E3E]">
            © 2026 RoksPaw Timmerwerken. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}