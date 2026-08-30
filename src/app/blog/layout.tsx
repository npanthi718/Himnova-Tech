import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Himnova Blog | Engineering Insights from Himnova Technologies",
  description:
    "Technical articles from Himnova Technologies (himnovatech.com) on cloud, AI, DevOps, and custom software engineering.",
  keywords: [
    "Himnova",
    "Himnova Technologies",
    "Himnova blog",
    "Software engineering Nepal",
    "Cloud and AI insights",
  ],
  alternates: {
    canonical: "https://www.himnovatech.com/blog",
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
