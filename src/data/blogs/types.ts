export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category:
    | "Artificial Intelligence"
    | "Cloud & DevOps"
    | "Software Architecture"
    | "Cybersecurity"
    | "Mobile & Web Engineering"
    | "FinTech & SaaS"
    | "E-Commerce & SaaS"
    | "Healthcare & Wellness"
    | "Industry Insights";
  tags: string[];
  readTime: string;
  publishedDate: string;
  author: BlogAuthor;
  coverImage: string;
  tableOfContents: Array<{ id: string; title: string }>;
  featured?: boolean;
}
