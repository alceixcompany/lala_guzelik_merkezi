import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ReduxProvider from "@/components/ReduxProvider";

const inter = Inter({ 
  subsets: ["latin", "latin-ext"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: '--font-playfair',
});

const dancingScript = Dancing_Script({
  subsets: ["latin", "latin-ext"],
  variable: '--font-dancing',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lalaguzellik.com"),
  title: "Lale Güzellik Merkezi | Cilt Bakımı, Lazer Epilasyon ve Güzellik Hizmetleri",
  description: "Lale Güzellik Merkezi'nde cilt bakımı, lazer epilasyon, kaş ve kirpik uygulamaları ile vücut bakım hizmetlerini sakin, zarif ve premium bir deneyimle keşfedin.",
  keywords: [
    "lale güzellik merkezi",
    "güzellik merkezi",
    "cilt bakımı",
    "lazer epilasyon",
    "kaş ve kirpik",
    "vücut bakımı",
    "istanbul güzellik merkezi",
    "üsküdar güzellik merkezi",
    "profesyonel cilt bakımı",
    "premium güzellik merkezi",
    "lazer epilasyon istanbul",
    "kaş tasarımı",
    "kirpik bakımı",
    "bakım merkezi istanbul"
  ].join(", "),
  authors: [{ name: "Lale Güzellik Merkezi" }],
  creator: "Lale Güzellik Merkezi",
  publisher: "Lale Güzellik Merkezi",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.lalaguzellik.com"
  },
  category: "beauty",
  classification: "Business",
  other: {
    "geo.region": "TR-34",
    "geo.placename": "İstanbul",
    "geo.position": "41.0082;28.9784",
    "ICBM": "41.0082, 28.9784"
  },
  icons: {
    icon: [
      { url: '/browser_icon.png', sizes: '16x16', type: 'image/png' },
      { url: '/browser_icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/browser_icon.png', sizes: '48x48', type: 'image/png' },
      { url: '/browser_icon.png', sizes: '96x96', type: 'image/png' },
      { url: '/browser_icon.png', sizes: '128x128', type: 'image/png' },
      { url: '/browser_icon.png', sizes: '256x256', type: 'image/png' },
    ],
    shortcut: '/browser_icon.png',
    apple: [
      { url: '/browser_icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/browser_icon.png' },
    ],
  },
  openGraph: {
    title: "Lale Güzellik Merkezi | Güzelliğinize Değer Katın",
    description: "Cilt bakımı, lazer epilasyon, kaş ve kirpik uygulamaları ile huzurlu ve premium bir güzellik merkezi deneyimi.",
    type: "website",
    locale: "tr_TR",
    siteName: "Lale Güzellik Merkezi",
    url: "https://www.lalaguzellik.com",
    images: [
      {
        url: '/Lale_logo.png',
        width: 1200,
        height: 630,
        alt: 'Lale Güzellik Merkezi'
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lale Güzellik Merkezi",
    description: "Cilt bakımı, lazer epilasyon ve premium güzellik hizmetleri.",
    images: ['/Lale_logo.png']
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WMRRXTMT');`,
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-C0CDXP5F4H"
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C0CDXP5F4H');
              gtag('config', 'AW-16813075076');
            `,
          }}
        />
        {/* End Google tag (gtag.js) */}
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${dancingScript.variable} font-sans`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WMRRXTMT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ReduxProvider>
          <RootLayoutContent>{children}</RootLayoutContent>
        </ReduxProvider>
      </body>
    </html>
  );
}

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  // Admin sayfalarında Header, Footer ve FloatingContact gösterme
  // Bu kontrol client-side'da yapılacak
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingContact />
    </>
  );
}
