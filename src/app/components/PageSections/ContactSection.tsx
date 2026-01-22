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
        <div className={'mt-[100px] flex flex-col items-center cursor-default'} >
            <p className={'text-[#3B3B3B] text-[64px] font-tertiary'}>Contact</p>

            <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <div className={' relative w-[1000px] h-[1000px]'}>
                    <div className={'bg-[#9B9B9B] w-[1000px] relative rounded-[20px]'}></div>
                    <div
                        className={'bg-[#EBEBEB] w-[1000px]  absolute bottom-5 left-5 rounded-[20px] pt-[50px] pl-[100px]'}>
                        <p className={'text-[#3B3B3B] text-[64px] font-tertiary'}>Formulier</p>

                        <div className={'gap-[30px] flex flex-col mt-[50px]'}>

                            <div>
                                <p className={'font-spartan font-[200] text-[30px]'}>Naam</p>
                                <input  name="name" required className={'rounded-[15px] p-[10px] bg-white w-[70%] border-[#6C6C6C] border-2'}
                                       type={"text"} placeholder={'Hans'}></input>
                            </div>

                            <div>
                                <p className={'font-spartan font-[200] text-[30px]'}>Onderwerp</p>
                                <input name="title" required className={'rounded-[15px] p-[10px] bg-white w-[70%] border-[#6C6C6C] border-2'}
                                       type={"text"} placeholder={'Keuken verbouwen'}></input>
                            </div>

                            <div>
                                <p className={'font-spartan font-[200] text-[30px]'}>Omschrijving</p>
                                <textarea
                                     name="context" required className={'rounded-[15px] p-[10px] bg-white w-[70%] border-[#6C6C6C] border-2'}
                                    placeholder={'Keuken verbouwen'}></textarea>
                            </div>

                            <div>
                                <fieldset>
                                    <p className={'font-spartan font-[200] text-[30px]'}>Hoe wilt u dat we contact met u
                                        opnemen?</p>
                                    <div className={'flex flex-row gap-[40px]'}>
                                        <div>
                                            <input required type="radio" id="contactCall" name="contactMethod" value="call"
                                                   className={'scale-160 cursor-pointer mr-[10px]'}></input>
                                            <label className={'font-main font-[24px]'}>Bellen</label>
                                        </div>

                                        <div>
                                            <input type="radio" id="contactEmail" name="contactMethod" value="email"
                                                   className={'scale-160 cursor-pointer mr-[10px]'}></input>
                                            <label className={'font-main font-[24px]'}>Email</label>
                                        </div>

                                        <div>
                                            <input type="radio" id="contactWhatsapp" name="contactMethod"
                                                   value="whatsapp"
                                                   className={'scale-160 cursor-pointer mr-[10px]'}></input>
                                            <label className={'font-main font-[24px]'}>Whatsapp</label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            <div>
                                <p className={'font-spartan font-[200] text-[30px]'}>{"Foto's (optioneel)"}</p>
                                <label
                                    htmlFor="images"
                                    className="rounded-[5px] bg-white border-[#717171] p-[5px] border-[2px] hover:bg-white/20 cursor-pointer inline-block"
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
                                    <ul className="mt-3 text-[16px] text-[#3E3E3E]">
                                        {selectedFiles.map((file, index) => (
                                            <li
                                                key={file.name + index}
                                                className="flex justify-between items-center w-[70%]"
                                            >
                                                <span className="underline truncate">{file.name}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedFiles(prev =>
                                                            prev.filter((_, i) => i !== index)
                                                        );
                                                    }}
                                                    className="text-[#6A6969] hover:text-red-600 transition cursor-pointer"
                                                    aria-label="Verwijder bestand"
                                                >
                                                    ✕
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>


                            <div className={'flex flex-col w-[800px] items-center mt-[30px] gap-[40px]'}>
                                <div className={'bg-[#3B3B3B] w-[80%] h-[1px] '}></div>

                                <button
                                    className={'pl-[10px] mb-[20px] pr-[10px] border-[2px] border-[#6A6969] w-[20%] p-[15px] bg-white rounded-[10px] hover:bg-white/20 cursor-pointer '}
                                    type={"submit"}>Verstuur
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}