import type { SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'zoltan-on-software',
  description:
    "Zoltan's blog about software development, programming, and technology.",
  href: 'https://zoltan-langsfeld.github.io/zoltan-on-software/',
  author: 'zoltan',
  locale: 'de-DE',
  featuredPostCount: 2,
  postsPerPage: 4,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '',
    label: 'home',
  },
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/zoltan-langsfeld',
    label: 'github',
  },
  {
    href: 'https://www.linkedin.com/in/zoltan-lajtavari/',
    label: 'linkedIn',
  },
  {
    href: 'mailto:zoltan@langsfeld.me',
    label: 'mail',
  }
]
