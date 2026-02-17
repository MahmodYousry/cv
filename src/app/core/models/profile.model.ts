export interface Profile {
  name: string;
  title: string;
  birthDate: string; // ISO date e.g. '1997-01-26'
  imageUrls: string[];
  resumePdfUrl: string;
  introParagraphs: string[];
  frontEndIntro?: string;
  backEndIntro?: string;
  apiIntro?: string;
  closingIntro?: string;
}
