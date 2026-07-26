import type {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Lees hoe RoksPaw Timmermannen gegevens verwerkt via het contactformulier en hoe uw privacy wordt beschermd.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
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
              Privacyverklaring
            </h1>
            <p className="mt-5 max-w-[58ch] text-[1rem] leading-7 text-[#F3ECDB]/75">
              Deze privacyverklaring legt uit welke gegevens we verzamelen via het contactformulier, waarom we die gegevens gebruiken en hoe we ze beschermen.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 lg:px-8">
        <div className="mx-auto grid max-w-[1160px] gap-6 lg:grid-cols-2">
          <article className="rounded-md bg-[#2B2620] p-6 text-[#F3ECDB] sm:p-8">
            <h2 className="font-tertiary text-[1.65rem] text-[#D9A441]">1. Welke gegevens verwerken wij?</h2>
            <p className="mt-4 text-sm leading-7 text-[#F3ECDB]/78">
              Via het contactformulier kunt u onder meer uw naam, onderwerp, omschrijving, voorkeursmethode van contact, contactgegevens en eventueel foto&apos;s doorgeven.
            </p>
          </article>

          <article className="rounded-md bg-[#EFE6CF] p-6 sm:p-8">
            <h2 className="font-tertiary text-[1.65rem] text-[#1E1B16]">2. Waarom verwerken wij deze gegevens?</h2>
            <p className="mt-4 text-sm leading-7 text-[#2B2620]">
              We gebruiken uw gegevens alleen om uw bericht te beantwoorden, contact op te nemen zoals u dat aangeeft, en om een offerte of afspraak voor te bereiden.
            </p>
          </article>

          <article className="rounded-md bg-[#EFE6CF] p-6 sm:p-8">
            <h2 className="font-tertiary text-[1.65rem] text-[#1E1B16]">3. Hoe bewaren wij gegevens?</h2>
            <p className="mt-4 text-sm leading-7 text-[#2B2620]">
              De gegevens worden per e-mail aan ons verstuurd. We gebruiken ze alleen voor de afhandeling van uw aanvraag en slaan ze niet op in een openbare database.
            </p>
          </article>

          <article className="rounded-md bg-[#2B2620] p-6 text-[#F3ECDB] sm:p-8">
            <h2 className="font-tertiary text-[1.65rem] text-[#D9A441]">4. Bewaartermijn en delen met derden</h2>
            <p className="mt-4 text-sm leading-7 text-[#F3ECDB]/78">
              We bewaren berichten niet langer dan nodig is om uw vraag af te handelen. Uw gegevens worden niet gedeeld met derden, tenzij dit wettelijk verplicht is.
            </p>
          </article>

          <article className="rounded-md bg-[#1E1B16] p-6 text-[#F3ECDB] lg:col-span-2 sm:p-8">
            <h2 className="font-tertiary text-[1.65rem] text-[#D9A441]">5. Uw rechten en contact</h2>
            <p className="mt-4 max-w-[70ch] text-sm leading-7 text-[#F3ECDB]/78">
              U kunt altijd vragen om inzage, correctie of verwijdering van uw gegevens. Stuur daarvoor een bericht naar pawelstandowicz@gmail.com of bel +31 6 25344505.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/" className="inline-flex rounded-sm bg-[#D9A441] px-4 py-2 text-sm font-semibold text-[#1E1B16] transition hover:bg-[#F3ECDB]">
                Terug naar home
              </Link>
              <Link href="/rights" className="inline-flex rounded-sm border border-[#F3ECDB]/20 px-4 py-2 text-sm font-semibold text-[#F3ECDB] transition hover:border-[#D9A441] hover:text-[#D9A441]">
                Algemene voorwaarden
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}