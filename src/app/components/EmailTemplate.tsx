import * as React from "react";

interface EmailTemplateProps {
    firstName: string;
    title: string;
    content: string;
    contactMethod: string;
    contactDetail: string;
    imageCount?: number;
}

export function EmailTemplate({
                                  firstName,
                                  title,
                                  content,
                                  contactMethod,
                                  contactDetail,
                                  imageCount,
                              }: EmailTemplateProps) {
    return (
        <div>
            <h1>Imię klienta: {firstName}</h1>
            <p>Tytuł: {title}</p>
            <p>Opis: {content}</p>
            <p>Jak klient chce, aby się z nim skontaktować: {contactMethod}</p>
            <p>Dane kontaktowe klienta: {contactDetail}</p>

            {imageCount && imageCount > 0 && (
                <p>Liczba załączonych zdjęć: {imageCount}</p>
            )}
        </div>
    );
}
