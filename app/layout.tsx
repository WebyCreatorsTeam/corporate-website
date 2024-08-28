import type { Metadata } from "next";
import "./ui/_style/global.scss";
import { openSans } from "./ui/fonts/fonts";
import Footer from "./ui/components/Footer";
import NavBar from "./ui/components/NavBar/NavBar";
import Form from "./ui/components/Form/Form";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'

export const experimental_ppr = true;

export const metadata: Metadata = {
  title: {
    template: "%s | Weby Team",
    default: "Weby Team",
  },
  description: "שירותי פיתוח אתרים מתקדמים. מומחים בבניית אתרים מותאמים אישית עבור העסק, מספקים פתרונות דיגיטליים מקצה לקצה ברמה הגבוהה ביותר",
  keywords: ['פיתוח אתר', 'עיצוב אתר', 'בניית אתרים', 'אתר לעסק', 'פתרונות דיגיטליים', 'בית תוכנה', 'UX/UI'],
  authors: [{ name: 'Katya Ru', url: 'https://www.katya-ru.dev' }],
  creator: 'Katya Ru',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: {
      template: "%s | Weby Team",
      default: "Weby Team",
    },
    description: "שירותי פיתוח אתרים מתקדמים. מומחים בבניית אתרים מותאמים אישית עבור העסק, מספקים פתרונות דיגיטליים מקצה לקצה ברמה הגבוהה ביותר",
    type: 'website',
    siteName: 'Weby Team',
    locale: 'he_IL',
    url: "https://www.weby.team",
    images: [{
      url: "https://www.weby.team/logo_white_bkgr.png",
      width: 730,
      height: 483,
      alt: "לוגו של וובי"
    }],
    emails: ['webycreatorsteam@gmail.com'],
    phoneNumbers: ['972-51-5183320'],
    countryName: 'Israel',
  },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="he">
      <body className={openSans.className} dir="rtl" suppressHydrationWarning={true}>
        <NavBar />
        <main>
          {children}
        </main>
        <Form />
        <Footer />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-GQWBPL6NKS"></Script>
        <Script src="https://cdn.enable.co.il/licenses/enable-L28217bliq9wyu18-0724-61784/init.js"></Script>
      </body>
      <GoogleAnalytics gaId="G-GQWBPL6NKS" />
    </html>
  );
}
