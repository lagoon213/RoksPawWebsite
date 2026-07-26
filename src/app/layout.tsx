import type {Metadata} from "next";
import {League_Spartan, Jost, Julius_Sans_One, K2D, Lalezar} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const juliusSansOne = Julius_Sans_One({
    variable: "--font-julius-sans-one",
    subsets: ["latin"],
    weight: ["400"],
});

const leagueSpartan = League_Spartan({
    variable: "--font-league-spartan",
    subsets: ["latin"],
    weight: ["200", "400", "500", "600", "700", "800", "900",],
});

const jost = Jost({
    variable: "--font-jost",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const lalezar = Lalezar({
    variable: "--font-lalezar",
    subsets: ["latin"],
    weight: ["400"],
});

const k2d = K2D({
    variable: "--font-k2d",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.rokspaw.nl"),
    title: {
        default: "RoksPaw Timmermannen | Timmerwerk in Tilburg",
        template: "%s | RoksPaw Timmermannen",
    },
    description: "RoksPaw Timmermannen verzorgt timmerwerk, renovatie, isolatie, vloeren en afwerking in Tilburg en omgeving.",
    applicationName: "RoksPaw Timmermannen",
    keywords: [
        "timmerman Tilburg",
        "timmerwerk Tilburg",
        "renovatie Tilburg",
        "schilderwerk Tilburg",
        "vloeren leggen Tilburg",
        "isolatie Tilburg",
        "RoksPaw",
    ],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "nl_NL",
        url: "/",
        siteName: "RoksPaw Timmermannen",
        title: "RoksPaw Timmermannen | Timmerwerk in Tilburg",
        description: "RoksPaw Timmermannen verzorgt timmerwerk, renovatie, isolatie, vloeren en afwerking in Tilburg en omgeving.",
        images: [
            {
                url: "/main-page-image.jpg",
                width: 1200,
                height: 630,
                alt: "RoksPaw Timmermannen aan het werk",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "RoksPaw Timmermannen | Timmerwerk in Tilburg",
        description: "RoksPaw Timmermannen verzorgt timmerwerk, renovatie, isolatie, vloeren en afwerking in Tilburg en omgeving.",
        images: ["/main-page-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="nl">

        <body
            className={`${lalezar.variable} ${jost.variable} ${juliusSansOne.variable} ${k2d.variable} ${leagueSpartan.variable} bg-[#F3ECDB] text-[#1E1B16] antialiased`}
        >
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
