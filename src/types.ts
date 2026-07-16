export interface ProjectImages {
  beauty: string;
  clay: string;
  wireframe: string;
  textured: string;
  details: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryFilter: 'hard_surface' | 'environment' | 'product' | 'props' | 'vehicles' | 'stylized' | 'realistic';
  software: string[];
  polygons: string;
  textureSize: string;
  timeTaken: string;
  shortDescription: string;
  longDescription: string;
  images: ProjectImages;
  comparisonOptions: {
    left: { label: string; key: keyof ProjectImages };
    right: { label: string; key: keyof ProjectImages };
  }[];
}

export interface TimelineStep {
  number: string;
  title: string;
  iconName: string;
  description: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Tool {
  name: string;
  logoUrl?: string;
  description: string;
}
