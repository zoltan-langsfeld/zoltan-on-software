export type Site = {
    title: string;
    description: string;
    href: string;
    author: string;
    locale: string;
    featuredPostCount: number;
    postsPerPage: number;
}

export type SocialLink = {
    href: string;
    label: string;
};

type ISODateString = string;

export type Resume = {
  summary: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  certifications: Certification[];
  volunteering: Volunteering[];
};

export type ExperienceEntry = {
  company: string;
  location: string;
  positions: {
    title: string;
    team?: string;
    startDate: ISODateString;
    endDate: ISODateString;
    description?: string[];
    skills?: string[];
  }[];
};

export type EducationEntry = {
  institution: string;
  location: string;
  subject: string;
  degree?: string;
  startDate: ISODateString;
  endDate: ISODateString;
  grade?: string;
  thesis?: string;
  courses?: string[];
  note?: string;
};

export type Certification = {
    name: string;
    issuer: string;
    date: ISODateString;
    validUntil?: ISODateString;
    credentialUrl?: string;
};

export type Volunteering = {
    organization: string;
    position: string;
    startDate: ISODateString;
    endDate: ISODateString;
    description?: string;
};