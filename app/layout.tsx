import "@styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "@components/Header";
import { ReservationProvider } from "~/app/_context/ReservationContext";
import { AuthProvider } from "~/app/_context/AuthContext";
import { SessionProvider } from "next-auth/react";

const josefinSansFont = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description: "Luxurious cabins located near the Stavanger fjords in Norway",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <AuthProvider>
        <html lang="en">
          <body
            className={`${josefinSansFont.className}
        bg-primary-950 text-primary-100 min-h-screen flex flex-col
          antialiased relative`}
          >
            <Header />
            <div className="flex-1 px-8 py-12 grid">
              <main className="max-w-7xl mx-auto w-full">
                <ReservationProvider>{children}</ReservationProvider>
              </main>
            </div>
          </body>
        </html>
      </AuthProvider>
    </SessionProvider>
  );
}
