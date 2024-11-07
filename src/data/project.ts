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
];

export default projects;
