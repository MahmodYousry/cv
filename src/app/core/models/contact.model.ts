export interface SocialLink {
  label: string;
  url: string;
  icon: string; // e.g. 'facebook', 'linkedin', 'github'
  ariaLabel: string;
}

export interface Contact {
  address: string;
  email: string;
  phone: string;
  websiteUrl: string;
  websiteLabel: string;
  nationality: string;
  socialLinks: SocialLink[];
}
