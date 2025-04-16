export type ContentItem = {
  type: "video" | "image";
  src: string;
  alt?: string;
};

export type ContentMap = {
  [key: string]: ContentItem;
};

export type Skill =
  | "TS"
  | "React"
  | "NextJS"
  | "CraftCMS"
  | "GraphQL"
  | "Tailwind"
  | "HTML"
  | "CSS"
  | "JS"
  | "AdobeSuite"
  | "Git"
  | "Diverse research methods";

export type WorkExperienceProps = {
  dateRange: string;
  role: string;
  company: string;
  companyType: string;
  skills: Skill[];
  description: string;
  logo: string;
};

export type EducationExperienceProps = {
  dateRange: string;
  school: string;
  degree: string;
  format: string;
  place: string;
};

export type ProjectItem = {
  id?: string;
  type: "video" | "image";
  src: string | null;
  alt?: string;
  link: string;
  title: string;
  category: string;
  description: string;
  nature: string;
  bgColor: string;
};

export type MediaItemProps = {
  type: "video" | "image";
  classNameContainer: "string";
  classNameMedia: "string";
  src: string;
  alt?: string;
  layoutId: string;
  onClick: () => void;
};

export interface GetItemContent {
  (id: string): ProjectItem | undefined;
}
