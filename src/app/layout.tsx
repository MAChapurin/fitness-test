import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["cyrillic"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["cyrillic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" itemScope itemType="https://schema.org/WebPage">
      <body
        className={`${montserrat.variable} ${raleway.variable} font-montserrat antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
