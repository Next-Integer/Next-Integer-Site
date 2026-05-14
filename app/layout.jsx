import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans",
  display: "swap"
});

export const metadata = {
  title: "Integer",
  description: "Integer",
  icons: {
    icon: "/IntegerDot.png",
    shortcut: "/IntegerDot.png",
    apple: "/IntegerDot.png"
  },
  openGraph: {
    title: "Integer",
    description: "Integer",
    siteName: "Integer"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ibmPlexSans.variable}>{children}</body>
    </html>
  );
}
