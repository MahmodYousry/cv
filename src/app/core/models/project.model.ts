export interface Project {
  title: string;
  imageUrl: string;
  imageAlt: string;
  description?: string;
  features?: string[];
  previewUrl: string;
  /** When set, a Details page is available at /projects/{slug} with README at public/project-docs/{slug}/README.md */
  slug?: string;
}
