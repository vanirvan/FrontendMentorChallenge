// lists of all projects

export interface Project {
  project_url: string;
  frontendmentor_url: string;
  name: string;
  image: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
}

const projects: Project[] = [
  {
    project_url: "/qr-code-component",
    frontendmentor_url:
      "https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H",
    name: "QR Code Component",
    image: "/cover.png",
    difficulty: 1,
  },
  {
    project_url: "/blog-preview-card",
    frontendmentor_url:
      "https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS",
    name: "Blog Preview Card",
    image: "/cover.png",
    difficulty: 1,
  },
  {
    project_url: "/mortgage-repayment-calculator",
    frontendmentor_url:
      "https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73",
    name: "Mortgage Repayment Calculator",
    image: "/cover.png",
    difficulty: 2,
  },
  {
    project_url: "/bento-grid",
    frontendmentor_url:
      "https://www.frontendmentor.io/challenges/bento-grid-RMydElrlOj",
    name: "Bento Grid",
    image: "/cover.png",
    difficulty: 2,
  },
  {
    project_url: "/age-calculator-app",
    frontendmentor_url:
      "https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q",
    name: "Age Calculator App",
    image: "/cover.png",
    difficulty: 2,
  },
  {
    project_url: "/multistep-form",
    frontendmentor_url:
      "https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ",
    name: "Multi-step Form",
    image: "/cover.png",
    difficulty: 4,
  },
  {
    project_url: "/ip-address-tracker",
    frontendmentor_url:
      "https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0",
    name: "IP Address Tracker",
    image: "/cover.png",
    difficulty: 3,
  },
  {
    project_url: "/results-summary-component",
    frontendmentor_url:
      "https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV",
    name: "Results summary component",
    image: "/cover.png",
    difficulty: 1,
  },
  {
    project_url: "/conference-ticket-generator",
    frontendmentor_url:
      "https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w",
    name: "Conference ticket generator",
    image: "/cover.png",
    difficulty: 2,
  },
  {
    project_url: "/rock-paper-scissors",
    frontendmentor_url:
      "https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH",
    name: "Rock, Paper, Scissors game",
    image: "/cover.png",
    difficulty: 4,
  },
];

export default projects;
