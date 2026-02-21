import Link from "next/link";

export default function rightsPage() {
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
              Algemene Voorwaarden - RoksPaw Timmermannen
            </p>

            <div className="mt-[clamp(1rem,2.5vw,2rem)] space-y-[clamp(0.6rem,1.4vw,0.9rem)] text-[#3B3B3B]">
              <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                Deze voorwaarden zijn van toepassing op alle offertes, opdrachten en werkzaamheden uitgevoerd
                door RoksPaw,
                gevestigd in Tilburg, ingeschreven bij de Kamer van Koophandel onder nummer 85712116.
              </p>

              <p className="font-tertiary text-[clamp(1.1rem,1.7vw,1.6rem)] mt-[clamp(1rem,2.2vw,1.6rem)]">
                1. Offertes
              </p>
              <div className="pl-[clamp(0.5rem,1.2vw,1rem)] space-y-1">
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  - Alle offertes zijn vrijblijvend, tenzij anders vermeld.
                </p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  - Prijzen zijn exclusief materialen, tenzij uitdrukkelijk opgenomen.
                </p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  - Een offerte is geldig tot 30 dagen na datum van verzending.
                </p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  - Een opdracht komt tot stand zodra de klant een offerte schriftelijk of per e-mail bevestigt.
                </p>
              </div>

              <p className="font-tertiary text-[clamp(1.1rem,1.7vw,1.6rem)] mt-[clamp(1rem,2.2vw,1.6rem)]">
                2. Uitvoering van werkzaamheden
              </p>
              <div className="pl-[clamp(0.5rem,1.2vw,1rem)] space-y-1">
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  - De werkzaamheden worden zorgvuldig en volgens afspraak uitgevoerd.
                </p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  - Eventuele bouwkundige verrassingen of verborgen gebreken kunnen leiden tot meerwerk.
                </p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  - Meerwerk wordt vooraf gecommuniceerd en apart gefactureerd.
                </p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  - De opdrachtgever zorgt voor vrije toegang tot de werkplek.
                </p>
              </div>

              <p className="font-tertiary text-[clamp(1.1rem,1.7vw,1.6rem)] mt-[clamp(1rem,2.2vw,1.6rem)]">
                3. Materialen
              </p>
              <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                Indien de klant materialen levert, is de klant zelf
                verantwoordelijk voor kwaliteit en hoeveelheden.
              </p>
              <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                Bij levering door ons gebruiken wij materialen van
                professionele kwaliteit en leveranciers.
              </p>

              <p className="font-tertiary text-[clamp(1.1rem,1.7vw,1.6rem)] mt-[clamp(1rem,2.2vw,1.6rem)]">
                4. Betaling
              </p>
              <div className="pl-[clamp(0.5rem,1.2vw,1rem)] space-y-1">
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  Betaling dient te geschieden binnen 14 dagen na
                  factuurdatum, tenzij anders afgesproken.
                </p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  Bij opdrachten van groter volume kan een aanbetaling
                  gevraagd worden.
                </p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  Bij uitblijven van betaling kunnen extra kosten in
                  rekening worden gebracht (zoals incassokosten en
                  wettelijke rente).
                </p>
              </div>

              <p className="font-tertiary text-[clamp(1.1rem,1.7vw,1.6rem)] mt-[clamp(1rem,2.2vw,1.6rem)]">
                5. Annulering
              </p>
              <div className="pl-[clamp(0.5rem,1.2vw,1rem)] space-y-1">
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  Annuleringen dienen schriftelijk of per e-mail te worden
                  doorgegeven.
                </p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  Bij annulering na opdrachtbevestiging kan gemaakte
                  voorbereidings- en materiaalkost worden doorberekend.
                </p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  Bij annulering binnen 48 uur voor aanvang van de
                  werkzaamheden kan tot 30% van de opdrachtprijs worden
                  gefactureerd.
                </p>
              </div>

              <p className="font-tertiary text-[clamp(1.1rem,1.7vw,1.6rem)] mt-[clamp(1rem,2.2vw,1.6rem)]">
                6. Garantie en klachten
              </p>
              <div className="pl-[clamp(0.5rem,1.2vw,1rem)] space-y-1">
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  Op door ons uitgevoerde werkzaamheden geldt een garantie
                  van 3 maanden, tenzij anders overeengekomen.
                </p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  Schade door verkeerd gebruik, onvoldoende onderhoud of
                  externe oorzaken valt niet onder garantie.
                </p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  Klachten dienen binnen 14 dagen na ontdekking
                  schriftelijk gemeld te worden.
                </p>
              </div>

              <p className="font-tertiary text-[clamp(1.1rem,1.7vw,1.6rem)] mt-[clamp(1rem,2.2vw,1.6rem)]">
                7. Aansprakelijkheid
              </p>
              <div className="pl-[clamp(0.5rem,1.2vw,1rem)] space-y-1">
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  Wij zijn aansprakelijk voor schade die het directe
                  gevolg is van aantoonbaar foutief handelen.
                </p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  Wij zijn niet aansprakelijk voor gevolgschade zoals
                  omzetverlies, vertraging of waardevermindering.
                </p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">
                  Indien materialen door de klant worden aangeleverd,
                  vervalt onze aansprakelijkheid over fouten hierdoor
                  ontstaan.
                </p>
              </div>

              <p className="font-tertiary text-[clamp(1.1rem,1.7vw,1.6rem)] mt-[clamp(1rem,2.2vw,1.6rem)]">
                8. Overmacht
              </p>
              <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                In situaties buiten onze controle (o.a. ziekte,
                leveringsproblemen, weersomstandigheden) mogen
                werkzaamheden worden
                uitgesteld. De klant wordt zo spoedig mogelijk
                geïnformeerd en er wordt een nieuwe datum
                overeengekomen.
              </p>

              {/* Vanaf hier: inhoud exact zoals je het plakte, maar netjes in <p> */}
              <div className="mt-[clamp(1rem,2.2vw,1.6rem)] space-y-[clamp(0.6rem,1.4vw,0.9rem)]">
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">9. Toepasselijk recht</p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                  Op deze overeenkomst is het Nederlandse recht van
                  toepassing. Geschillen worden, indien nodig, voorgelegd
                  aan de bevoegde
                  rechter in de regio van de opdrachtnemer.
                </p>

                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)]">10. Contact</p>
                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                  RoksPaw timmerwerken Paweł Standowicz Besoijenstraat 22,
                  Tilburg E-mail: pawelstandowicz@gmail.com Telefoon: +31
                  6 25344505Algemene Voorwaarden - RoksPaw Timmermannen
                  Deze voorwaarden zijn van toepassing op alle offertes,
                  opdrachten en werkzaamheden uitgevoerd door RoksPaw,
                  gevestigd in Tilburg, ingeschreven bij de Kamer van
                  Koophandel onder nummer 85712116.
                  1. Offertes
                  Alle offertes zijn vrijblijvend, tenzij anders vermeld.
                  Prijzen zijn exclusief materialen, tenzij uitdrukkelijk
                  opgenomen.
                  Een offerte is geldig tot 30 dagen na datum van
                  verzending.
                  Een opdracht komt tot stand zodra de klant een offerte
                  schriftelijk of per e-mail bevestigt.
                </p>

                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                  2. Uitvoering van werkzaamheden
                  De werkzaamheden worden zorgvuldig en volgens afspraak
                  uitgevoerd.
                  Eventuele bouwkundige verrassingen of verborgen gebreken
                  kunnen leiden tot meerwerk.
                  Meerwerk wordt vooraf gecommuniceerd en apart
                  gefactureerd.
                  De opdrachtgever zorgt voor vrije toegang tot de
                  werkplek.
                </p>

                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                  3. Materialen
                  Indien de klant materialen levert, is de klant zelf
                  verantwoordelijk voor kwaliteit en hoeveelheden.
                  Bij levering door ons gebruiken wij materialen van
                  professionele kwaliteit en leveranciers.
                </p>

                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                  4. Betaling
                  Betaling dient te geschieden binnen 14 dagen na
                  factuurdatum, tenzij anders afgesproken.
                  Bij opdrachten van groter volume kan een aanbetaling
                  gevraagd worden.
                  Bij uitblijven van betaling kunnen extra kosten in
                  rekening worden gebracht (zoals incassokosten en
                  wettelijke rente).
                </p>

                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                  5. Annulering
                  Annuleringen dienen schriftelijk of per e-mail te worden
                  doorgegeven.
                  Bij annulering na opdrachtbevestiging kan gemaakte
                  voorbereidings- en materiaalkost worden doorberekend.
                  Bij annulering binnen 48 uur voor aanvang van de
                  werkzaamheden kan tot 30% van de opdrachtprijs worden
                  gefactureerd.
                </p>

                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                  6. Garantie en klachten
                  Op door ons uitgevoerde werkzaamheden geldt een garantie
                  van 3 maanden, tenzij anders overeengekomen.
                  Schade door verkeerd gebruik, onvoldoende onderhoud of
                  externe oorzaken valt niet onder garantie.
                  Klachten dienen binnen 14 dagen na ontdekking
                  schriftelijk gemeld te worden.
                </p>

                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                  7. Aansprakelijkheid
                  Wij zijn aansprakelijk voor schade die het directe
                  gevolg is van aantoonbaar foutief handelen.
                  Wij zijn niet aansprakelijk voor gevolgschade zoals
                  omzetverlies, vertraging of waardevermindering.
                  Indien materialen door de klant worden aangeleverd,
                  vervalt onze aansprakelijkheid over fouten hierdoor
                  ontstaan.
                </p>

                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                  8. Overmacht
                  In situaties buiten onze controle (o.a. ziekte,
                  leveringsproblemen, weersomstandigheden) mogen
                  werkzaamheden worden
                  uitgesteld. De klant wordt zo spoedig mogelijk
                  geïnformeerd en er wordt een nieuwe datum
                  overeengekomen.
                </p>

                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                  9. Toepasselijk recht
                  Op deze overeenkomst is het Nederlandse recht van
                  toepassing. Geschillen worden, indien nodig, voorgelegd
                  aan de bevoegde
                  rechter in de regio van de opdrachtnemer.
                </p>

                <p className="font-spartan font-[200] text-[clamp(1rem,1.35vw,1.25rem)] leading-relaxed">
                  10. Contact
                  RoksPaw timmerwerken Paweł Standowicz Besoijenstraat 22,
                  Tilburg E-mail: pawelstandowicz@gmail.com Telefoon: +31
                  6 25344505
                </p>
              </div>
              {/* einde: inhoud exact */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}