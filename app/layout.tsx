import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata= {
  title: 'Booking.com Clone',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
