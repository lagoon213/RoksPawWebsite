export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#F3ECDB]/10 bg-[#1E1B16] text-[#F3ECDB] shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-4 py-4 sm:px-8 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#D9A441] font-tertiary text-[1.1rem] text-[#1E1B16]">
            RP
          </div>
          <div className="leading-none">
            <div className="font-tertiary text-[1.15rem] sm:text-[1.35rem]">RoksPaw</div>
            <div className="font-secondary text-[0.65rem] uppercase tracking-[0.18em] text-[#D9A441] sm:text-[0.7rem]">
              Timmermannen
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-9 font-main text-[0.95rem] md:flex">
          <a className="opacity-80 transition hover:opacity-100 hover:text-[#D9A441]" href="#home">
            Home
          </a>
          <a className="opacity-80 transition hover:opacity-100 hover:text-[#D9A441]" href="#diensten">
            Diensten
          </a>
          <a className="opacity-80 transition hover:opacity-100 hover:text-[#D9A441]" href="#contact">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="hidden items-center rounded-sm bg-[#D9A441] px-4 py-2 text-[0.85rem] font-semibold text-[#1E1B16] transition hover:bg-[#F3ECDB] sm:inline-flex"
        >
          Gratis adviesgesprek
        </a>
      </div>
    </header>
  );
}