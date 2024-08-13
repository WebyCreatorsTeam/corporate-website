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
            {children}
        </main>
        <Footer />
        {/* <script src="https://cdn.enable.co.il/licenses/enable-L28217bliq9wyu18-0724-61784/init.js"></script> */}
      </body>
    </html>
  );
}
