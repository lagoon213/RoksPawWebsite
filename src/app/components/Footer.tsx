import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-0 bg-[#2B2620] text-[#F3ECDB]">
      <div className="mx-auto grid max-w-[1160px] gap-10 px-4 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#D9A441] font-tertiary text-[1.1rem] text-[#1E1B16]">
              RP
            </div>
            <div className="leading-none">
              <div className="font-tertiary text-[1.15rem]">RoksPaw</div>
              <div className="font-secondary text-[0.65rem] uppercase tracking-[0.18em] text-[#D9A441]">
                Timmermannen
              </div>
            </div>
          </div>
          <p className="max-w-[32ch] text-sm leading-6 text-[#F3ECDB]/75">
            Vakkundig timmerwerk in Tilburg en omstreken, van klein herstel tot complete renovatie.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-secondary text-[0.7rem] uppercase tracking-[0.18em] text-[#D9A441]">
            Navigatie
          </h4>
          <a className="mb-2 block text-sm text-[#F3ECDB]/75 transition hover:text-[#D9A441]" href="#home">
            Home
          </a>
          <a className="mb-2 block text-sm text-[#F3ECDB]/75 transition hover:text-[#D9A441]" href="#diensten">
            Diensten
          </a>
          <a className="block text-sm text-[#F3ECDB]/75 transition hover:text-[#D9A441]" href="#contact">
            Contact
          </a>
        </div>

        <div>
          <h4 className="mb-4 font-secondary text-[0.7rem] uppercase tracking-[0.18em] text-[#D9A441]">
            Bedrijf
          </h4>
          <p className="mb-2 text-sm text-[#F3ECDB]/75">RoksPaw</p>
          <p className="mb-2 text-sm text-[#F3ECDB]/75">KvK: 85712116</p>
          <p className="text-sm text-[#F3ECDB]/75">Besoijenstraat 22, 5043 WX Tilburg</p>
        </div>

        <div>
          <h4 className="mb-4 font-secondary text-[0.7rem] uppercase tracking-[0.18em] text-[#D9A441]">
            Juridisch
          </h4>
          <Link className="mb-2 block text-sm text-[#F3ECDB]/75 transition hover:text-[#D9A441]" href="/privacy">
            Privacyverklaring
          </Link>
          <Link className="block text-sm text-[#F3ECDB]/75 transition hover:text-[#D9A441]" href="/rights">
            Algemene voorwaarden
          </Link>
        </div>
      </div>

      <div className="border-t border-[#F3ECDB]/10">
        <div className="mx-auto flex max-w-[1160px] flex-col gap-2 px-4 py-5 text-xs text-[#F3ECDB]/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-8">
          <span>© 2026 RoksPaw Timmerwerken. Alle rechten voorbehouden.</span>
          <span>pawelstandowicz@gmail.com · +31 6 25344505</span>
        </div>
      </div>
    </footer>
  );
}