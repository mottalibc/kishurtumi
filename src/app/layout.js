import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin", "bengali"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "kishur-tumi",
  description: "Social awarness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${hindSiliguri.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
