export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface Job {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ToolItem {
  name: string;
  description: string;
  image: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "x" | "linkedin" | "blog";
}

export interface ToolCategory {
  title: string;
  items: ToolItem[];
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string; // for videos
  location: string;
  description: string;
}

export enum PageState {
  HOME = 'home',
  WORK = 'work',
  PROJECTS = 'projects',
  USES = 'uses',
  GALLERY = 'gallery'
}