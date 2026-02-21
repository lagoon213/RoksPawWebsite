'use client';
import React from "react";


async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const res = await fetch("/api/send", {
    method: "POST",
    body: formData,
  });

  const result = await res.json();
  console.log("API response:", res.status, result);
}

export default function ContactSection() {
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);

  return (
    <div className="mt-12 sm:mt-[100px] flex flex-col items-center cursor-default px-4" id="contact-section">
      <p className="text-[#3B3B3B] text-2xl sm:text-4xl lg:text-[64px] font-tertiary">
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
                        <input required type="radio" name="contactMethod" value="call"
                          className="scale-125 sm:scale-150 cursor-pointer" />
                        <span className="font-main text-base sm:text-xl">Bellen</span>
                      </label>

                      <label className="flex items-center gap-2">
                        <input type="radio" name="contactMethod" value="email"
                          className="scale-125 sm:scale-150 cursor-pointer" />
                        <span className="font-main text-base sm:text-xl">Email</span>
                      </label>

                      <label className="flex items-center gap-2">
                        <input type="radio" name="contactMethod" value="whatsapp"
                          className="scale-125 sm:scale-150 cursor-pointer" />
                        <span className="font-main text-base sm:text-xl">Whatsapp</span>
                      </label>
                    </div>
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
                  >
                    Verstuur
                  </button>
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