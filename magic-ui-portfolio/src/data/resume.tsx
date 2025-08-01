import { Icons } from "@/components/icons";
import { HomeIcon, } from "lucide-react";

export const DATA = {
  name: "Sourabh Soni",
  initials: "SS",
  url: "https://srb.codes",
  location: "Jaipur, Rajasthan",
  timezone: "Asia/Kolkata",
  locationLink: "https://www.google.com/maps/place/Jaipur,+Rajasthan",
  description:
    "Full Stack | Software Engineer ",
  summary:
    "I build in public — which basically means I live on X (Twitter)  \n\nwhat i do? code, play chess, read books, and play piano ",
  avatarUrl: "https://avatars.githubusercontent.com/u/36205701",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "Python",
    "PostgresSQL",
    "C++",
    "AWS",
    "Docker",
    "Git",
    "Cloudflare Workers",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "Sourabhs701@gmail.com",
    tel: "+91 8107655737",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sourabhs701",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sourabhs701/",
        icon: Icons.linkedin,
        navbar: false,
      },
      X: {
        name: "X",
        url: "https://x.com/intent/follow?screen_name=srbcode",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:Sourabhs701@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Vedhin Technology",
      href: "https://vedhin.com/",
      badges: [],
      location: "Jaipur, Rajasthan",
      title: "Full Stack Developer Intern",
      logoUrl: "https://cdn.srb.codes/36205701/vedhin.png",
      start: "Apr 2024",
      end: "Sep 2024",
      description:
        "Developed scalable web apps with React.js, Node.js, and PostgreSQL. Deployed on AWS (EC2, S3, CloudFront). Integrated Mailgun SMTP for email delivery. Focused on optimizing performance and user experience.",
    },
  ],
  education: [
    {
      school: "Rajasthan Technical University",
      href: "https://www.rtu.ac.in/",
      degree: "Masters in Computer Application (MCA)",
      logoUrl: "https://cdn.srb.codes/36205701/rtu.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "University of Rajasthan",
      href: "https://www.uniraj.ac.in/",
      degree: "Bachelors in Computer Application (BCA)",
      logoUrl: "https://cdn.srb.codes/36205701/uniraj.png",
      start: "2019",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "MakeThumb.com",
      href: "https://makethumb.com",
      dates: "May 2025 – Present",
      active: true,
      description:
        "A next-gen crowdfunding platform powered by the Solana blockchain, enabling creators to launch campaigns with escrow-based smart contracts for secure, trustless transactions. Includes milestone-based fund release, backer reward tiers, and real-time contribution tracking. Designed to foster transparency and minimize fraud in the fundraising ecosystem.",
      technologies: ["Next.js", "PostgreSQL", "Solana", "JavaScript", "Rust"],
      badges: [],
      links: [
        {
          type: "Website",
          href: "https://makethumb.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://cdn.srb.codes/36205701/makethumb.png",
    },
    {
      title: "Bloom",
      href: "https://bloom.srb.codes",
      dates: "Feb 2025 – Present",
      active: true,
      description:
        "A beautifully animated, responsive landing page built to showcase smooth user interactions with advanced scroll and parallax effects. Designed with visual storytelling in mind, Bloom highlights modern web aesthetics, optimized performance, and fluid UX transitions.",
      technologies: [
        "Next.js",
        "Framer Motion",
      ],
      badges: [],
      links: [
        {
          type: "Website",
          href: "https://bloom.srb.codes",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://cdn.srb.codes/36205701/bloom.png",
    },


  ],
} as const;
