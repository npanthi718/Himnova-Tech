import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Himnova Contact | Talk to Himnova Technologies",
  description:
    "Contact Himnova Technologies Private Limited (himnovatech.com) in Baneshwor, Kathmandu for custom software, cloud, and AI engineering. Official Himnova IT company.",
  keywords: [
    "Himnova",
    "Himnova Technologies",
    "Contact Himnova Tech",
    "himnovatech.com",
    "IT Company Kathmandu",
  ],
  alternates: {
    canonical: "https://www.himnovatech.com/contact",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
