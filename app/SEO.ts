import { Metadata } from "next";

export const metadataShow = () => {
    const metadata: Metadata = {
    title: {
      template: "%s | Weby Team",
      default: "Weby Team",
    },
    description: "שירותי פיתוח אתרים מתקדמים. מומחים בבניית אתרים מותאמים אישית עבור העסק, מספקים פתרונות דיגיטליים מקצה לקצה ברמה הגבוהה ביותר",
    keywords: ['פיתוח אתר', 'עיצוב אתר', 'בניית אתרים', 'אתר לעסק', 'פתרונות דיגיטליים', 'בית תוכנה', 'UX/UI'],
    authors: [{ name: 'Katya Ru', url: 'https://www.katya-ru.dev' }],
    creator: 'Katya Ru',
    metadataBase: new URL("https://www.weby.team"),
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
      // description: {
      //   template: "%s",
      //   default: "שירותי פיתוח אתרים מתקדמים. מומחים בבניית אתרים מותאמים אישית עבור העסק, מספקים פתרונות דיגיטליים מקצה לקצה ברמה הגבוהה ביותר",
      // },
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

  return metadata;
}