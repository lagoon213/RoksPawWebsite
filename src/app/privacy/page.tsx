import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-[clamp(2rem,5vw,4rem)]">
      <div className="mx-auto w-full max-w-[1100px]">
        <Link
          href="/"
          className="inline-flex items-center text-[#3B3B3B] underline underline-offset-4 hover:opacity-80 transition"
        >
          &lt; terug
        </Link>

        <div className="mt-[clamp(1.25rem,3vw,2rem)] bg-[#EBEBEB] rounded-[clamp(12px,1.5vw,20px)] border-2 border-[#6C6C6C]">
          <div className="p-[clamp(1.25rem,3.2vw,3rem)]">
            <p className="text-[#3B3B3B] font-tertiary text-[clamp(1.6rem,3.5vw,3.2rem)] leading-[1.05]">
              Privacyverklaring - RoksPaw Timmerwerken
            </p>

            <div className="mt-[clamp(1rem,2.5vw,2rem)] space-y-[clamp(0.6rem,1.4vw,0.9rem)] text-[#3B3B3B]">
              <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                Deze privacyverklaring is van toepassing op het gebruik van het contactformulier op deze website.
              </p>

              <p className="font-tertiary text-[clamp(1.1rem,1.7vw,1.6rem)] mt-[clamp(1rem,2.2vw,1.6rem)]">
                1. Welke gegevens verwerken wij?
              </p>
              <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                Via het contactformulier kunt u de volgende gegevens aan ons doorgeven:
              </p>
              <div className="pl-[clamp(0.5rem,1.2vw,1rem)] space-y-1">
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">- Naam</p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">- E-mailadres</p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">- Telefoonnummer</p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  - Voorkeursmethode van contact (bellen, e-mail, WhatsApp)
                </p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">- Omschrijving van de klus</p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">- Eventuele foto’s die u mee stuurt</p>
              </div>

              <p className="font-tertiary text-[clamp(1.1rem,1.7vw,1.6rem)] mt-[clamp(1rem,2.2vw,1.6rem)]">
                2. Waarom verwerken wij deze gegevens?
              </p>
              <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                Wij gebruiken uw gegevens uitsluitend voor:
              </p>
              <div className="pl-[clamp(0.5rem,1.2vw,1rem)] space-y-1">
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">- Het beantwoorden van uw bericht</p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  - Het opstellen van een offerte of het inplannen van een afspraak
                </p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  Het nemen van contact op zoals door u aangegeven
                </p>
              </div>
              <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                Wij gebruiken uw gegevens niet voor marketing of nieuwsbrieven.
              </p>

              <p className="font-tertiary text-[clamp(1.1rem,1.7vw,1.6rem)] mt-[clamp(1rem,2.2vw,1.6rem)]">
                3. Hoe worden uw gegevens opgeslagen?
              </p>
              <div className="pl-[clamp(0.5rem,1.2vw,1rem)] space-y-1">
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  - De gegevens die u via het formulier invult worden per e-mail naar ons verstuurd.
                </p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  - Wij gebruiken deze gegevens alleen in onze e-mailpostvakmap.
                </p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  - De gegevens worden niet automatisch opgeslagen in een database.
                </p>
              </div>

              <p className="font-tertiary text-[clamp(1.1rem,1.7vw,1.6rem)] mt-[clamp(1rem,2.2vw,1.6rem)]">
                4. Bewaartermijn
              </p>
              <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                Wij bewaren uw gegevens maximaal 12 maanden, zodat wij uw vraag of offerte kunnen afhandelen en eventuele
                vervolgafspraken kunnen maken. Heeft u bezwaar tegen deze bewaartermijn? Stuur een e-mail en wij
                verwijderen uw gegevens eerder.
              </p>

              <p className="font-tertiary text-[clamp(1.1rem,1.7vw,1.6rem)] mt-[clamp(1rem,2.2vw,1.6rem)]">
                5. Delen wij gegevens met derden?
              </p>
              <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                Nee. Uw gegevens worden niet gedeeld met andere partijen, tenzij wettelijk verplicht (bijvoorbeeld bij
                fraude of misbruik).
              </p>

              <p className="font-tertiary text-[clamp(1.1rem,1.7vw,1.6rem)] mt-[clamp(1rem,2.2vw,1.6rem)]">
                6. Beveiliging
              </p>
              <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                Wij nemen passende maatregelen om uw gegevens te beschermen, waaronder:
              </p>
              <div className="pl-[clamp(0.5rem,1.2vw,1rem)] space-y-1">
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">- Een beveiligde mailomgeving</p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  - Beperkte toegang tot mailbox en systemen
                </p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  - Geen opslag in openbare of gedeelde omgevingen
                </p>
              </div>

              <p className="font-tertiary text-[clamp(1.1rem,1.7vw,1.6rem)] mt-[clamp(1rem,2.2vw,1.6rem)]">
                7. Uw rechten
              </p>
              <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                U heeft het recht om:
              </p>
              <div className="pl-[clamp(0.5rem,1.2vw,1rem)] space-y-1">
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  - Inzage te vragen in uw opgeslagen gegevens
                </p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  - Uw gegevens te laten corrigeren of verwijderen
                </p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  - Verwerking te beperken of bezwaar te maken
                </p>
              </div>
              <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                Wilt u hiervan gebruikmaken? Stuur dan een bericht via het contactformulier of e-mail.
              </p>

              <p className="font-tertiary text-[clamp(1.1rem,1.7vw,1.6rem)] mt-[clamp(1rem,2.2vw,1.6rem)]">
                8. Contactgegevens
              </p>
              <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                RoksPaw Timmerwerken E-mail: pawelstandowicz@gmail.com
              </p>
              <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                Telefoon: +31 6 25344505
              </p>
              <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                Werkgebied: Besoijenstraat 22, Tilburg
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}