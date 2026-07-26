import type {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "De algemene voorwaarden van RoksPaw Timmermannen voor offertes, opdrachten, uitvoering en garantie.",
  alternates: {
    canonical: "/rights",
  },
};

export default function RightsPage() {
  return (
    <main className="bg-[#F3ECDB] text-[#1E1B16]">
      <section className="bg-[#1E1B16] pt-16 text-[#F3ECDB]">
        <div className="mx-auto max-w-[1160px] px-4 pb-16 sm:px-8 lg:px-8">
          <Link href="/" className="inline-flex items-center text-sm text-[#D9A441] transition hover:text-[#F3ECDB]">
            &lt; terug naar home
          </Link>

          <div className="mt-6 max-w-[760px]">
            <div className="eyebrow text-[#D9A441]">Juridisch</div>
            <h1 className="mt-4 font-tertiary text-[clamp(2.4rem,4vw,4rem)] leading-[0.95]">
              Algemene voorwaarden
            </h1>
            <p className="mt-5 max-w-[58ch] text-[1rem] leading-7 text-[#F3ECDB]/75">
              Deze voorwaarden zijn van toepassing op offertes, opdrachten en werkzaamheden van RoksPaw Timmermannen.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 lg:px-8">
        <div className="mx-auto grid max-w-[1160px] gap-6 lg:grid-cols-2">
          <article className="rounded-md bg-[#EFE6CF] p-6 sm:p-8">
            <h2 className="font-tertiary text-[1.65rem] text-[#1E1B16]">1. Offertes en opdracht</h2>
            <p className="mt-4 text-sm leading-7 text-[#2B2620]">
              Offertes zijn vrijblijvend, tenzij anders vermeld. Een opdracht komt tot stand zodra de klant de offerte schriftelijk of per e-mail bevestigt.
            </p>
          </article>

          <article className="rounded-md bg-[#2B2620] p-6 text-[#F3ECDB] sm:p-8">
            <h2 className="font-tertiary text-[1.65rem] text-[#D9A441]">2. Uitvoering</h2>
            <p className="mt-4 text-sm leading-7 text-[#F3ECDB]/78">
              We voeren werkzaamheden zorgvuldig uit volgens afspraak. Verborgen gebreken of extra werk worden vooraf besproken en kunnen leiden tot meerwerk.
            </p>
          </article>

          <article className="rounded-md bg-[#2B2620] p-6 text-[#F3ECDB] sm:p-8">
            <h2 className="font-tertiary text-[1.65rem] text-[#D9A441]">3. Materialen en betaling</h2>
            <p className="mt-4 text-sm leading-7 text-[#F3ECDB]/78">
              Als de klant zelf materialen levert, is diegene verantwoordelijk voor kwaliteit en hoeveelheid. Betaling gebeurt binnen 14 dagen na factuurdatum, tenzij anders afgesproken.
            </p>
          </article>

          <article className="rounded-md bg-[#EFE6CF] p-6 sm:p-8">
            <h2 className="font-tertiary text-[1.65rem] text-[#1E1B16]">4. Annulering en garantie</h2>
            <p className="mt-4 text-sm leading-7 text-[#2B2620]">
              Annuleringen dienen schriftelijk of per e-mail te worden doorgegeven. Op onze werkzaamheden geldt garantie, tenzij anders overeengekomen.
            </p>
          </article>

          <article className="rounded-md bg-[#1E1B16] p-6 text-[#F3ECDB] lg:col-span-2 sm:p-8">
            <h2 className="font-tertiary text-[1.65rem] text-[#D9A441]">5. Aansprakelijkheid en contact</h2>
            <p className="mt-4 max-w-[70ch] text-sm leading-7 text-[#F3ECDB]/78">
              RoksPaw is niet aansprakelijk voor gevolgschade of schade door verkeerd gebruik, onvoldoende onderhoud of externe oorzaken. Voor vragen kunt u mailen naar pawelstandowicz@gmail.com of bellen naar +31 6 25344505.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/" className="inline-flex rounded-sm bg-[#D9A441] px-4 py-2 text-sm font-semibold text-[#1E1B16] transition hover:bg-[#F3ECDB]">
                Terug naar home
              </Link>
              <Link href="/privacy" className="inline-flex rounded-sm border border-[#F3ECDB]/20 px-4 py-2 text-sm font-semibold text-[#F3ECDB] transition hover:border-[#D9A441] hover:text-[#D9A441]">
                Privacyverklaring
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
