// lists of all projects

export interface Project {
  url: string;
  name: string;
  image: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  finish_timestamp: number;
}

const projects: Project[] = [];

export default projects;
