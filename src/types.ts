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