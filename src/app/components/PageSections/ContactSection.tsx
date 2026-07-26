'use client';
import React from "react";

export default function ContactSection() {
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);
  const [contactMethod, setContactMethod] = React.useState("");
  const [submitState, setSubmitState] = React.useState<
    | { status: "idle" }
    | { status: "sending" }
    | { status: "success"; message: string }
    | { status: "error"; message: string }
  >({ status: "idle" });

  const fallbackErrorMessage =
    "formulier werkt niet bel of app aub op nummer: 06 25344505";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formEl = e.currentTarget;

    setSubmitState({ status: "sending" });

    const formData = new FormData(formEl);
    // The UI allows removing files from the list, but the underlying <input type="file">
    // can't be surgically edited. To avoid sending "removed" files, we rebuild the images
    // payload from `selectedFiles`.
    formData.delete("images");
    for (const file of selectedFiles) {
      formData.append("images", file);
    }

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      let result: unknown = null;
      try {
        result = await res.json();
      } catch {
        // Non-JSON error; fall back to generic message.
      }

      if (!res.ok || !(typeof result === "object" && result !== null && "ok" in result && Boolean((result as { ok?: unknown }).ok))) {
        console.error("/api/send failed:", res.status, result);
        setSubmitState({ status: "error", message: fallbackErrorMessage });
        return;
      }

      setSubmitState({
        status: "success",
        message: "Bedankt! Je bericht is verstuurd.",
      });
      formEl.reset();
      setSelectedFiles([]);
      setContactMethod("");
    } catch (err: unknown) {
      console.error("/api/send exception:", err);
      setSubmitState({
        status: "error",
        message: fallbackErrorMessage,
      });
    }
  }

  return (
    <section className="bg-[#EFE6CF] px-4 py-16 sm:px-8 sm:py-24 lg:px-0" id="contact">
      <div className="mx-auto max-w-[1160px]">
        <div className="max-w-[640px]">
          <div className="eyebrow">Contact</div>
          <h2 className="mt-4 font-tertiary text-[clamp(2rem,3.6vw,2.6rem)] leading-none text-[#1E1B16] sm:text-[clamp(2.5rem,4.2vw,3.5rem)]">
            Laten we het opmeten.
          </h2>
          <p className="mt-4 max-w-[42ch] text-[0.98rem] leading-7 text-[#2B2620] sm:text-[1.05rem]">
            Stuur uw klus door en we nemen binnen één werkdag contact op om een afspraak voor het inmeten te plannen.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 sm:mt-12">
          <div>
            <h3 className="font-tertiary text-[clamp(1.6rem,2.2vw,2.1rem)] text-[#1E1B16]">RoksPaw Timmermannen</h3>
            <p className="mt-4 max-w-[38ch] text-[0.98rem] leading-7 text-[#2B2620]">
              Neem contact op voor reparatie, renovatie of maatwerk. We denken mee, meten in en maken heldere afspraken.
            </p>

            <div className="mt-8 space-y-0 border-y border-dashed border-[#2B2620]/25">
              <div className="flex flex-col gap-1 border-b border-dashed border-[#2B2620]/25 py-4 text-[0.95rem] text-[#2B2620] sm:flex-row sm:gap-4">
                <div className="w-auto shrink-0 font-secondary text-[0.7rem] uppercase tracking-[0.14em] text-[#A8452D] sm:w-[6.5rem]">
                  Adres
                </div>
                <div>
                  Besoijenstraat 22<br />
                  5043 WX Tilburg
                </div>
              </div>
              <div className="flex flex-col gap-1 border-b border-dashed border-[#2B2620]/25 py-4 text-[0.95rem] text-[#2B2620] sm:flex-row sm:gap-4">
                <div className="w-auto shrink-0 font-secondary text-[0.7rem] uppercase tracking-[0.14em] text-[#A8452D] sm:w-[6.5rem]">
                  Telefoon
                </div>
                <div>
                  <a className="transition hover:text-[#A8452D]" href="tel:+31625344505">
                    +31 6 25344505
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-1 py-4 text-[0.95rem] text-[#2B2620] sm:flex-row sm:gap-4">
                <div className="w-auto shrink-0 font-secondary text-[0.7rem] uppercase tracking-[0.14em] text-[#A8452D] sm:w-[6.5rem]">
                  E-mail
                </div>
                <div>
                  <a className="transition hover:text-[#A8452D]" href="mailto:pawelstandowicz@gmail.com">
                    pawelstandowicz@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-sm bg-[#1E1B16] p-5 text-[#F3ECDB]">
              <div className="font-secondary text-[0.7rem] uppercase tracking-[0.18em] text-[#D9A441]">
                KvK
              </div>
              <div className="mt-2 font-tertiary text-[1.5rem]">85712116</div>
            </div>
          </div>

          <form encType="multipart/form-data" onSubmit={handleSubmit} className="rounded-md bg-[#1E1B16] p-6 text-[#F3ECDB] shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:p-8">
            <div className="grid gap-5">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <div>
                <label className="mb-2 block font-secondary text-[0.7rem] uppercase tracking-[0.16em] text-[#D9A441]" htmlFor="name">
                  Naam
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-sm border border-[#F3ECDB]/20 bg-[#F3ECDB]/6 px-4 py-3 text-[0.95rem] text-[#F3ECDB] placeholder:text-[#F3ECDB]/35 focus:border-[#D9A441] focus:outline-none"
                  type="text"
                  placeholder="Uw naam"
                />
              </div>

              <div>
                <label className="mb-2 block font-secondary text-[0.7rem] uppercase tracking-[0.16em] text-[#D9A441]" htmlFor="title">
                  Onderwerp
                </label>
                <input
                  id="title"
                  name="title"
                  required
                  className="w-full rounded-sm border border-[#F3ECDB]/20 bg-[#F3ECDB]/6 px-4 py-3 text-[0.95rem] text-[#F3ECDB] placeholder:text-[#F3ECDB]/35 focus:border-[#D9A441] focus:outline-none"
                  type="text"
                  placeholder="Bijv. dakgoot herstellen"
                />
              </div>

              <div>
                <label className="mb-2 block font-secondary text-[0.7rem] uppercase tracking-[0.16em] text-[#D9A441]" htmlFor="context">
                  Omschrijving
                </label>
                <textarea
                  id="context"
                  name="context"
                  required
                  className="min-h-[110px] w-full rounded-sm border border-[#F3ECDB]/20 bg-[#F3ECDB]/6 px-4 py-3 text-[0.95rem] text-[#F3ECDB] placeholder:text-[#F3ECDB]/35 focus:border-[#D9A441] focus:outline-none"
                  placeholder="Vertel kort over de klus"
                />
              </div>

              <div>
                <label className="mb-2 block font-secondary text-[0.7rem] uppercase tracking-[0.16em] text-[#D9A441]">
                  Hoe wilt u contact?
                </label>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { value: "call", label: "Bellen" },
                    { value: "email", label: "E-mail" },
                    { value: "whatsapp", label: "WhatsApp" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex cursor-pointer items-center justify-center rounded-sm border px-3 py-3 text-[0.93rem] transition ${
                        contactMethod === option.value
                          ? "border-[#D9A441] bg-[#D9A441]/10 text-[#D9A441]"
                          : "border-[#F3ECDB]/20 bg-[#F3ECDB]/4 text-[#F3ECDB]/80 hover:border-[#F3ECDB]/45"
                      }`}
                    >
                      <input
                        required
                        type="radio"
                        name="contactMethod"
                        value={option.value}
                        checked={contactMethod === option.value}
                        onChange={() => setContactMethod(option.value)}
                        className="sr-only"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>

                {contactMethod && (
                  <div className="mt-4">
                    <label className="mb-2 block font-secondary text-[0.7rem] uppercase tracking-[0.16em] text-[#D9A441]" htmlFor="contactDetail">
                      {contactMethod === "email" ? "Uw e-mailadres" : "Uw telefoonnummer"}
                    </label>
                    <input
                      id="contactDetail"
                      required
                      name="contactDetail"
                      type={contactMethod === "email" ? "email" : "tel"}
                      className="w-full rounded-sm border border-[#F3ECDB]/20 bg-[#F3ECDB]/6 px-4 py-3 text-[0.95rem] text-[#F3ECDB] placeholder:text-[#F3ECDB]/35 focus:border-[#D9A441] focus:outline-none"
                      placeholder={contactMethod === "email" ? "jan@voorbeeld.nl" : "06 12345678"}
                    />
                  </div>
                )}
              </div>

              <div>
                <div className="mb-2 block font-secondary text-[0.7rem] uppercase tracking-[0.16em] text-[#D9A441]">
                  Foto&apos;s (optioneel)
                </div>

                <label
                  htmlFor="images"
                  className="inline-flex cursor-pointer items-center rounded-sm border border-dashed border-[#F3ECDB]/25 bg-[#F3ECDB]/4 px-4 py-3 text-[0.9rem] text-[#F3ECDB]/80 transition hover:border-[#D9A441] hover:text-[#D9A441]"
                >
                  Voeg bestand toe
                </label>

                <input
                  type="file"
                  id="images"
                  name="images"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={(e) => {
                    const files = Array.from(e.currentTarget.files ?? []);
                    setSelectedFiles(files);
                  }}
                />

                {selectedFiles.length > 0 && (
                  <ul className="mt-4 space-y-2 text-sm text-[#F3ECDB]/75">
                    {selectedFiles.map((file, index) => (
                      <li key={file.name + index} className="flex items-center justify-between gap-3">
                        <span className="truncate underline decoration-[#D9A441]/50 underline-offset-4">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => setSelectedFiles((prev) => prev.filter((_, i) => i !== index))}
                          className="shrink-0 text-[#F3ECDB]/55 transition hover:text-[#D9A441]"
                        >
                          Verwijder
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-2">
                <button
                  className="inline-flex w-full items-center justify-center rounded-sm bg-[#A8452D] px-5 py-3 font-semibold text-[#F3ECDB] transition hover:bg-[#8f3a23] disabled:cursor-not-allowed disabled:opacity-70"
                  type="submit"
                  disabled={submitState.status === "sending"}
                >
                  {submitState.status === "sending" ? "Versturen..." : "Verstuur aanvraag"}
                </button>

                {submitState.status === "success" && (
                  <p className="mt-4 text-center text-sm text-[#D9A441]">{submitState.message}</p>
                )}

                {submitState.status === "error" && (
                  <p className="mt-4 text-center text-sm text-red-400">{submitState.message}</p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}