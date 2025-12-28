import p1_1 from "../assets/project1(1).webp";
import p1_2 from "../assets/project1(2).webp";
import p1_3 from "../assets/project1(3).webp";
import p2_1 from "../assets/project2(1).webp";
import p2_2 from "../assets/project2(2).webp";
import p2_3 from "../assets/project2(3).webp";
import p3_1 from "../assets/project3(1).webp";
import p3_2 from "../assets/project3(2).webp";
import p3_3 from "../assets/project3(3).webp";

export const projects = [
  {
    id: "01",
    title: "Beautiful.gym Creations",
    shortDesc: "A modern gym website with subscription management.",
    longDesc:
      "This project is a comprehensive web solution for a modern gym, featuring a visually stunning landing page and a robust subscription management system. It allows users to browse plans, sign up, and manage their memberships seamlessy.",
    img: p1_1,
    images: [p1_1, p1_2, p1_3],
    goal: "To create an engaging and easy-to-use platform for gym members to manage their fitness journey.",
    problems:
      "Old system was clunky and not mobile-friendly. Users had trouble managing subscriptions.",
    tech: ["React", "Tailwind CSS", "GSAP", "Node.js"],
    features: [
      "Responsive Design",
      "Subscription Management",
      "Interactive UI",
    ],
    liveLink: "#",
  },
  {
    id: "02",
    title: "E-Commerce Platform",
    shortDesc: "A scalable online store solution.",
    longDesc:
      "A fully functional e-commerce platform designed for scalability and performance. It includes product filtering, cart management, and secure checkout processes.",
    img: p2_1,
    images: [p2_1, p2_2, p2_3],
    goal: "To build a performant online store that can handle high traffic and multiple product categories.",
    problems: "Slow load times and poor SEO on the previous platform.",
    tech: ["Next.js", "Stripe", "MongoDB"],
    features: ["Real-time Inventory", "Secure Checkout", "Admin Dashboard"],
    liveLink: "#",
  },
  {
    id: "03",
    title: "SaaS Dashboard",
    shortDesc: "Analytics and management dashboard.",
    longDesc:
      "An intuitive dashboard for SaaS applications, providing real-time analytics, user management, and reporting tools in a clean interface.",
    img: p3_1,
    images: [p3_1, p3_2, p3_3],
    goal: "To visualize complex data in an understandable way for business owners.",
    problems: "Data was scattered across multiple tools and hard to interpret.",
    tech: ["React", "D3.js", "Firebase"],
    features: ["Data Visualization", "User Roles", "Exportable Reports"],
    liveLink: "#",
  },
];
