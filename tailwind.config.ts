
module.exports = {
  theme: {
    extend: {
      typography: () => ({
        zoltan: {
          css: {
            '--tw-prose-body': 'var(--primary-text)',
            '--tw-prose-headings': 'var(--primary-text)',
            '--tw-prose-lead': 'var(--primary-text)',
            '--tw-prose-links': 'var(--links)',
            '--tw-prose-bold': 'var(--primary-text)',
            '--tw-prose-counters': 'var(--primary-text)',
            '--tw-prose-bullets': 'var(--primary-text)',
            '--tw-prose-hr': 'var(--primary-text)',
            '--tw-prose-quotes': 'var(--secondary-text)',
            '--tw-prose-quote-borders': 'var(--secondary-text)',
            '--tw-prose-captions': 'var(--primary-text)',
            '--tw-prose-code': 'var(--accent)',
            '--tw-prose-pre-code': '#ffeb3b',
            '--tw-prose-pre-bg': '#1e1e1e',
            '--tw-prose-th-borders': 'var(--secondary-text)',
            '--tw-prose-td-borders': 'var(--secondary-text)',
            '--tw-prose-invert-body': 'var(--background)',
            '--tw-prose-invert-headings': 'var(--background)',
            '--tw-prose-invert-lead': 'var(--background)',
            '--tw-prose-invert-links': 'var(--links)',
            '--tw-prose-invert-bold': 'var(--background)',
            '--tw-prose-invert-counters': 'var(--background)',
            '--tw-prose-invert-bullets': 'var(--background)',
            '--tw-prose-invert-hr': 'var(--background)',
            '--tw-prose-invert-quotes': 'var(--foreground)',
            '--tw-prose-invert-quote-borders': 'var(--foreground)',
            '--tw-prose-invert-captions': 'var(--background)',
            '--tw-prose-invert-code': 'var(--accent)',
            '--tw-prose-invert-pre-code': 'var(#ffeb3b)',
            '--tw-prose-invert-pre-bg': '#1e1e1e',
            '--tw-prose-invert-th-borders': 'var(--foreground)',
            '--tw-prose-invert-td-borders': 'var(--foreground)',
          },
        },
      }),
    },
  },
}