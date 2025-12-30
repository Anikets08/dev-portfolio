import { Job, Project, ToolCategory, GalleryItem, SocialLink } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Breeze",
    description:
      "A local AI-powered Chrome extension that generates SEO and marketing content directly from any webpage, including blog drafts and Reddit-style promotional posts, without relying on external cloud inference.",
    tags: ["Local LLM", "Vite", "CRX.js", "Chrome Extension"],
    image: "https://picsum.photos/id/48/800/600",
    link: "https://github.com/Anikets08/breeze",
  },
  {
    id: "2",
    title: "Fina",
    description:
      "An AI-driven personal finance analysis tool that processes bank statements, categorizes transactions, and provides insights via an interactive interface. Designed to assess borrower and lender loan eligibility using transaction-level intelligence.",
    tags: ["FastAPI", "OpenAI", "Pinecone", "LangSmith"],
    image: "https://picsum.photos/id/20/800/600",
    link: "https://github.com/Anikets08/fina",
  },
  {
    id: "3",
    title: "KeevoSpace",
    description:
      "AI-powered link management system using embeddings and conversational search, serving 500+ users with secure JWT-based authentication and cloud deployment.",
    tags: ["OpenAI", "Node.js", "PostgreSQL", "React", "AWS"],
    image: "https://picsum.photos/id/4/800/600",
    link: "https://www.keevo.space/",
  },
  {
    id: "4",
    title: "Balncd",
    description:
      "Mobile app for Indian SMBs to generate GST invoices and track business expenses.",
    tags: ["Flutter", "Firebase"],
    image: "https://picsum.photos/id/3/800/600",
    link: "https://play.google.com/store/apps/details?id=com.devniket.balncd",
  },
];

export const EXPERIENCE: Job[] = [
  {
    id: "1",
    role: "Full-Stack Developer",
    company: "Creator Club",
    period: "May 2025 — Present",
    description:
      "Re-architected core backend APIs with database optimizations, rate limiting, and performance tuning to improve scalability and reliability. Implemented production-grade observability using structured logging, metrics, and Grafana dashboards. Built analytics pipelines with Amplitude to support data-driven product decisions. Optimized creator matching and swipe flows to reduce unnecessary API calls and backend load. Designed and shipped creator invites and public share pages with user-controlled settings and analytics. Implemented real-time notifications and live updates using FCM and Server-Sent Events (SSE). Led escrow-based payment flows using Stripe Connect for paid collaborations.",
  },
  {
    id: "2",
    role: "Full-Stack Developer",
    company: "Realtime Innovations",
    period: "Aug 2023 — Apr 2025",
    description:
      "Designed and implemented microservices using Node.js, FastAPI, and PostgreSQL. Built secure collaboration features with encrypted backend services and client-side validation. Optimized CDN usage for public assets, reducing load times by 30%. Developed native iOS (Swift) and Android (Kotlin) layers for secure home widgets. Led migration from monolith to serverless using AWS Lambda and DynamoDB.",
  },
  {
    id: "3",
    role: "Full-Stack Developer",
    company: "Botzie",
    period: "Jul 2022 — Jul 2023",
    description:
      "Built responsive UI using Flutter and React.js for a crypto tracking platform. Integrated Web3 libraries for blockchain transactions and smart contract interactions. Developed REST and GraphQL APIs with Nest.js for real-time data. Implemented OAuth 2.0 authentication for cross-platform login.",
  },
  {
    id: "4",
    role: "Software Engineer Intern",
    company: "bHive Innovations",
    period: "Mar 2022 — Jun 2022",
    description:
      "Implemented video calling using Agora SDK (Flutter) and WebRTC (Web). Converted Figma designs into pixel-perfect React and Flutter interfaces. Enhanced security using JWT authentication and AES-256 encryption. Built a Python-based recommendation system for personalized content.",
  },
  {
    id: "5",
    role: "Software Engineer Intern",
    company: "MobbyPark",
    period: "Sep 2021 — Feb 2022",
    description:
      "Redesigned application UI using Flutter and React.js. Improved PostgreSQL query performance by 20%. Created custom animations to enhance user experience.",
  },
];

export const USES: ToolCategory[] = [
  {
    title: "Hardware",
    items: [
      {
        name: 'MacBook Pro 14" M1 Pro',
        description:
          "Primary machine for all development, from local LLMs to production deployments.",
        image:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: 'Acer 21" Monitor',
        description:
          "Secondary display dedicated to logs, terminals, and documentation.",
        image:
          "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: 'BenQ 27" Monitor',
        description:
          "Main external monitor for UI work, dashboards, and code review.",
        image:
          "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Apple Magic Keyboard",
        description:
          "Low-profile typing for focus sessions and writing-heavy days.",
        image:
          "https://images.unsplash.com/photo-1596496181848-3091d4878b22?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Keychron K2",
        description:
          "Hot-swappable mechanical keyboard for long coding sprints.",
        image:
          "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Dual Monitor Desk Mount",
        description: "Keeps the setup ergonomic and the desk clean.",
        image:
          "https://images.unsplash.com/photo-1523816572-adf1a9e0d1ca?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Samsung S24",
        description:
          "Daily driver phone and quick test device for web/mobile flows.",
        image:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Sony WH-CH720N",
        description:
          "ANC headphones for deep work, calls, and long focus blocks.",
        image:
          "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Logitech M650 Mouse",
        description: "Ergonomic mouse for precise work and all-day comfort.",
        image:
          "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Samsung Galaxy Watch 4 Classic",
        description:
          "Keeps track of health and notifications without breaking flow.",
        image:
          "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    title: "Development",
    items: [
      {
        name: "Ghostty Terminal",
        description: "Fast, GPU-accelerated terminal for SSH, CLIs, and logs.",
        image:
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Cursor IDE",
        description:
          "AI-native editor where most of my TypeScript and backend work happens.",
        image:
          "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Zed IDE",
        description:
          "Lightweight editor for quick edits, pairing, and experiments.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Android Studio",
        description: "For Android builds, debugging, and mobile experiments.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Docker",
        description:
          "Local environments, reproducible services, and backend experiments.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "GitHub",
        description: "Home for all my code, reviews, CI, and open-source work.",
        image:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Postman / REST clients",
        description:
          "Quick API exploration and debugging for backend services.",
        image:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    title: "Everyday",
    items: [
      {
        name: "Slack",
        description: "Async collaboration with distributed teams.",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Notion",
        description: "My second brain for notes, specs, and personal docs.",
        image:
          "https://images.unsplash.com/photo-1634606788544-77f0a8c2533c?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Spotify",
        description:
          "Lo-fi, deep focus, and soundtracks for long coding sessions.",
        image:
          "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Raycast",
        description:
          "Launcher for scripts, snippets, and everything in between.",
        image:
          "https://images.unsplash.com/photo-1626075253683-9b88939c6395?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Arc Browser",
        description: "Where I keep docs, dashboards, and long-running tabs.",
        image:
          "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    type: "image",
    src: "https://pub-97653815d47144c2b862b6f6382577af.r2.dev/20251211_100201.jpg",
    location: "Rameshwaram Cafe, Bengaluru",
    description: "Ghee Podi Masala Dosa with a cup of coffee :)",
  },
  {
    id: "2",
    type: "image",
    src: "https://pub-97653815d47144c2b862b6f6382577af.r2.dev/20251211_102508.jpg",
    location: "Jayanagar, Bengaluru",
    description: "A beautiful morning in Jayanagar, Bengaluru",
  },
  {
    id: "3",
    type: "image",
    src: "https://pub-97653815d47144c2b862b6f6382577af.r2.dev/20251212_152536.jpg",
    location: "Coonoor, Ooty",
    description: "",
  },
  {
    id: "4",
    type: "image",
    src: "https://pub-97653815d47144c2b862b6f6382577af.r2.dev/20251212_114525-2.jpg",
    location: "Pykara Lake, Ooty",
    description: "",
  },
  {
    id: "5",
    type: "image",
    src: "https://pub-97653815d47144c2b862b6f6382577af.r2.dev/20251213_113111.jpg",
    location: "Coonoor, Ooty",
    description: "",
  },
  {
    id: "6",
    type: "image",
    src: "https://pub-97653815d47144c2b862b6f6382577af.r2.dev/20251213_124033.jpg",
    location: "Tea Garden, Ooty",
    description: "",
  },
  {
    id: "7",
    type: "image",
    src: "https://pub-97653815d47144c2b862b6f6382577af.r2.dev/20251213_154435.jpg",
    location: "La Belle Vie Cafe, Ooty",
    description: "",
  },
  {
    id: "8",
    type: "image",
    src: "https://pub-97653815d47144c2b862b6f6382577af.r2.dev/20251214_080752.jpg",
    location: "Vidhan Sabha, Bengaluru",
    description: "",
  },
  {
    id: "9",
    type: "image",
    src: "https://pub-97653815d47144c2b862b6f6382577af.r2.dev/20251214_211510.jpg",
    location: "Meghna Biryani, Bengaluru",
    description: "",
  },
  {
    id: "10",
    type: "image",
    src: "https://pub-97653815d47144c2b862b6f6382577af.r2.dev/20251230_185449.jpg",
    location: "Asli Cafe, Nagpur",
    description: "",
  },
];

export const SOCIALS: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/Anikets08",
    icon: "github",
  },
  {
    label: "X",
    url: "https://x.com/aniketsiingh",
    icon: "x",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/anikets08/",
    icon: "linkedin",
  },
  {
    label: "Blog",
    url: "https://devniket.medium.com/",
    icon: "blog",
  },
];
