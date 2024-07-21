import type { Metadata } from "next";
import "./ui/style/global.scss";
import { openSans } from "./ui/fonts/fonts";
import Footer from "./ui/components/Footer";
import NavBar from "./ui/components/NavBar/NavBar";

export const metadata: Metadata = {
  title: "Weby Team",
  description: "שירותי פיתוח אתרים מתקדמים. מומחים בבניית אתרים מותאמים אישית עבור העסק, מספקים פתרונות דיגיטליים מקצה לקצה ברמה הגבוהה ביותר",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="he">
      <body className={openSans.className} dir="rtl">
        <NavBar />
        <main>
          {/* <div> */}
            {children}
          {/* </div> */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
