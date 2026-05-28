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

      let result: any = null;
      try {
        result = await res.json();
      } catch {
        // Non-JSON error; fall back to generic message.
      }

      if (!res.ok || !result?.ok) {
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
    } catch (err: any) {
      console.error("/api/send exception:", err);
      setSubmitState({
        status: "error",
        message: fallbackErrorMessage,
      });
    }
  }

  return (
    <div className="relative mt-12 sm:mt-[100px] flex flex-col items-center cursor-default px-4" id="contact-section">
      <p className="relative z-20 text-[#3B3B3B] text-2xl sm:text-4xl lg:text-[64px] font-tertiary">
        Contact
      </p>

      <form encType="multipart/form-data" onSubmit={handleSubmit} className="w-full flex justify-center mt-6 sm:mt-10">
        <div className="flex justify-center w-full">
          {/* Parent background card */}
          <div className="bg-[#9B9B9B] w-full mr-4 sm:w-[90%] lg:w-[70%] rounded-[20px] relative">
            {/* Foreground card (absolute, offset) */}
            <div className="bg-[#EBEBEB] w-full rounded-[20px] absolute bottom-3 left-3 sm:bottom-5 sm:left-5
                            p-5 sm:p-10 lg:pt-[50px] lg:pl-[100px]">
              <p className="text-[#3B3B3B] text-xl sm:text-3xl lg:text-[64px] font-tertiary">
                Formulier
              </p>

              <div className="flex flex-col gap-6 sm:gap-[30px] mt-6 sm:mt-[50px]">
                <div>
                  <p className="font-spartan font-[200] text-base sm:text-xl lg:text-[30px]">Naam</p>
                  <input
                    name="name"
                    required
                    className="rounded-[15px] p-3 bg-white w-full  border-[#6C6C6C] border-2"
                    type="text"
                    placeholder="Bijv. Jan de Vries"
                  />
                </div>

                <div>
                  <p className="font-spartan font-[200] text-base sm:text-xl lg:text-[30px]">Onderwerp</p>
                  <input
                    name="title"
                    required
                    className="rounded-[15px] p-3 bg-white w-full  border-[#6C6C6C] border-2"
                    type="text"
                    placeholder="Bijv. keukenrenovatie, dakreparatie..."
                  />
                </div>

                <div>
                  <p className="font-spartan font-[200] text-base sm:text-xl lg:text-[30px]">Omschrijving</p>
                  <textarea
                    name="context"
                    required
                    className="rounded-[15px] p-3 bg-white w-full  border-[#6C6C6C] border-2 min-h-[120px]"
                    placeholder="Omschrijf uw klus: wat moet er gebeuren en waar?"
                  />
                </div>

                <div>
                  <fieldset>
                    <p className="font-spartan font-[200] text-base sm:text-xl lg:text-[30px]">
                      Hoe wilt u dat we contact met u opnemen?
                    </p>

                    <div className="flex flex-wrap gap-4 sm:gap-10 mt-3">
                      <label className="flex items-center gap-2">
                        <input
                          required
                          type="radio"
                          name="contactMethod"
                          value="call"
                          checked={contactMethod === "call"}
                          onChange={() => setContactMethod("call")}
                          className="scale-125 sm:scale-150 cursor-pointer"
                        />
                        <span className="font-main text-base sm:text-xl">Bellen</span>
                      </label>

                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="email"
                          checked={contactMethod === "email"}
                          onChange={() => setContactMethod("email")}
                          className="scale-125 sm:scale-150 cursor-pointer"
                        />
                        <span className="font-main text-base sm:text-xl">Email</span>
                      </label>

                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="whatsapp"
                          checked={contactMethod === "whatsapp"}
                          onChange={() => setContactMethod("whatsapp")}
                          className="scale-125 sm:scale-150 cursor-pointer"
                        />
                        <span className="font-main text-base sm:text-xl">Whatsapp</span>
                      </label>
                    </div>

                    {contactMethod && (
                      <div className="mt-4 max-w-[520px]">
                        <p className="font-spartan font-[200] text-base sm:text-xl lg:text-[30px]">
                          {contactMethod === "email" ? "Uw e-mailadres" : "Uw telefoonnummer"}
                        </p>
                        <input
                          required
                          name="contactDetail"
                          type={contactMethod === "email" ? "email" : "tel"}
                          className="rounded-[15px] p-3 bg-white w-full border-[#6C6C6C] border-2"
                          placeholder={
                            contactMethod === "email"
                              ? "Bijv. jan@voorbeeld.nl"
                              : "Bijv. 06 12345678"
                          }
                        />
                      </div>
                    )}
                  </fieldset>
                </div>

                <div>
                  <p className="font-spartan font-[200] text-base sm:text-xl lg:text-[30px]">
                    {"Foto's (optioneel)"}
                  </p>

                  <label
                    htmlFor="images"
                    className="mt-2 rounded-[5px] bg-white border-[#717171] p-[5px] border-[2px] hover:bg-white/20 cursor-pointer inline-block"
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
                    <ul className="mt-3 text-sm sm:text-[16px] text-[#3E3E3E] w-full sm:w-[70%]">
                      {selectedFiles.map((file, index) => (
                        <li key={file.name + index} className="flex justify-between items-center w-full gap-3">
                          <span className="underline truncate">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => setSelectedFiles(prev => prev.filter((_, i) => i !== index))}
                            className="text-[#6A6969] hover:text-red-600 transition cursor-pointer shrink-0"
                          >
                            ✕
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex flex-col items-center mt-4 sm:mt-[30px] gap-6 sm:gap-[40px] w-full">
                  <div className="bg-[#3B3B3B] w-full sm:w-[80%] h-[1px]" />
                  <button
                    className="mb-2 sm:mb-[20px] border-[2px] border-[#6A6969]
                               w-full sm:w-[30%] lg:w-[20%]
                               p-3 sm:p-[15px] bg-white rounded-[10px]
                               hover:bg-white/20 cursor-pointer"
                    type="submit"
                    disabled={submitState.status === "sending"}
                  >
                    {submitState.status === "sending" ? "Versturen..." : "Verstuur"}
                  </button>

                  {submitState.status === "success" && (
                    <p className="font-main text-base sm:text-xl text-[#3E3E3E] text-center w-full sm:w-[80%]">
                      {submitState.message}
                    </p>
                  )}

                  {submitState.status === "error" && (
                    <p className="font-main text-base sm:text-xl text-red-600 text-center w-full sm:w-[80%]">
                      {submitState.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Spacer: deze bepaalt hoe hoog de grijze achtergrond is */}
            <div className="h-[740px] sm:h-[920px] lg:h-[1040px]" />
          </div>
        </div>
      </form>
    </div>
  );
}