import type { Metadata } from "next";
import { Work_Sans,  Montserrat } from "next/font/google";
import "./globals.scss";

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-work-sans'
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});
export const metadata: Metadata = {
  title: "Lendsqr",
  description: "Lendsqr Organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
