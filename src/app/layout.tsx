import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "SlayChat — Group Chat Without Disintermediation",
  description: "Group chat without disintermediation — built for people who own networks and want to stay in control.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

