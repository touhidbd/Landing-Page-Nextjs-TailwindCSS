import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
})

export const metadata = {
    title: "Home - Landing Page",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${roboto.variable}`} suppressHydrationWarning={true}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}