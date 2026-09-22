export const projects = [
  {
    slug: "care-assist",
    key: "01",
    title: "CareAssist",
    shortDescription:
      "A digital healthcare platform that connects patients with verified medical professionals.",
    description:
      "CareAssist makes it simple to find care, book appointments, and have secure online consultations with verified medical professionals.",
    image: "/CareAssist.png",
    liveUrl: "https://care-assist-vert.vercel.app/",
    technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB", "REST APIs"],
    features: [
      "Verified professionals — discover trusted healthcare providers in one place.",
      "Flexible booking — arrange on-demand or scheduled appointments.",
      "Online consultations — connect with professionals securely from anywhere.",
      "Secure communication — keep appointment details and conversations private.",
      "Streamlined payments — manage bookings and payments in one flow.",
    ],
  },
  {
    slug: "project-two",
    key: "02",
    title: "Project Two",
    shortDescription:
      "A digital healthcare platform for convenient, secure patient care.",
    description:
      "A healthcare experience designed to make finding professionals, arranging care, and managing appointments feel straightforward.",
    image: "/CareAssist.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    features: [
      "Clear appointment management for patients and professionals.",
      "Responsive interface that works across screen sizes.",
      "Secure data handling for account and booking information.",
      "Practical search and discovery flows for care services.",
    ],
  },
  {
    slug: "project-three",
    key: "03",
    title: "Project Three",
    shortDescription:
      "A digital healthcare platform built around accessible care experiences.",
    description:
      "A thoughtful web experience that brings consultation, scheduling, and healthcare information together in one place.",
    image: "/CareAssist.png",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    features: [
      "Accessible patient-first workflows.",
      "Organised consultation and scheduling experience.",
      "Modern, responsive interface design.",
      "Scalable full-stack project structure.",
    ],
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);
