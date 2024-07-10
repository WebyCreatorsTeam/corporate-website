import { FC } from "react";
import Logo from "../logo/Logo";
import Image from "next/image";
import { ISiteMap } from "../typescript/interfaces";
import Link from "next/link";

const siteMap: Array<ISiteMap> = [
    { title: "מי אנחנו", url: "" },
    { title: "פרויקטים", url: "" },
    { title: "פידבקים", url: "" },
    { title: "שאלות נפוצות", url: "" },
    { title: "בלוג", url: "" },
    { title: "יצירת קשר", url: "" },
]

const products: Array<ISiteMap> = [
    { title: "כרטיס ביקור דיגיטלי", url: "" },
    { title: "דף נחיתה", url: "" },
    { title: "אתר תדמית", url: "" },
    { title: "חנות וירטואלית", url: "" },
]

const Footer: FC = () => {
    return (
        <footer>
            <div className="elementWidth footer-container">
                <div className="footer-container__sitemap">
                    <div className="footer-container__sitemap--items">
                        <h4>מוצרים</h4>
                        <ul>
                            {products.map((item, index) => (
                                <li key={index}>
                                    {item.url && item.url?.length > 0 ? <Link href={item.url} target="_blank" rel="noreferrer">{item.title}</Link> : item.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-container__sitemap--items">
                        <h4>באתר</h4>
                        <ul>
                            {siteMap.map((item, index) => (
                                <li key={index}>
                                    {item.url && item.url?.length > 0 ? <Link href={item.url} target="_blank" rel="noreferrer">{item.title}</Link> : item.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer-container__info">
                    <Logo />
                    <div className="footer-container__info--social">
                        <a href="https://www.facebook.com/profile.php?id=61554785497612" target="_blank" rel="noreferrer">
                            <Image
                                src="/images/footer/facebook.svg"
                                alt="פייסבוק"
                                width={40} height={40}
                                title="פייסבוק"
                            />
                        </a>
                        <a href="https://www.linkedin.com/company/101561570/admin/feed/posts" target="_blank" rel="noreferrer">
                            <Image
                                src="/images/footer/linkedin.svg"
                                alt="לינקדאין"
                                width={40} height={40}
                                title="לינקדאין"
                            />
                        </a>
                        <a href="https://www.youtube.com/@Weby-Create-team" target="_blank" rel="noreferrer">
                            <Image
                                src="/images/footer/yt icon.svg"
                                alt="יוטיוב"
                                width={40} height={40}
                                title="יוטיוב"
                            />
                        </a>
                    </div>
                    <div className="footer-container__info--phone">
                        <div className="footer-container__info--phone--deal">
                            <a href="tel:+972523690866" title="התקשר לראות לפרטים">ראות 052-369-0866</a>
                            <a href="tel:+972526299431" title="התקשר לקטיה לפרטים">קטיה 052-629-9431</a>
                        </div>
                        <Image
                            src="/images/footer/phone.svg"
                            alt="אייקון טלפון"
                            width={25}
                            height={40}
                        />
                    </div>
                    <div className="footer-container__info--email">
                        <a href="mailto:webycreatorsteam@gmail.com" className="footer-container__info--phone--deal">webycreatorsteam@gmail.com</a>
                        <Image
                            src="/images/footer/email.svg"
                            alt="אייקון אימייל" width={40} height={32}
                        />
                    </div>
                </div>
                {/* <div> Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry"> Kiranshastry </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                <div> Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26"> Icongeek26 </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
            </div>
        </footer>
    );
};

export default Footer;
