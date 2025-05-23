import "./globals.css";
import Cursor from "@/utils/Cursor";

export const metadata = {
  title: "Ephynystudio - Clone",
  description: "studio for design and development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* <Cursor /> */}
        {children}
      </body>
    </html>
  );
}
