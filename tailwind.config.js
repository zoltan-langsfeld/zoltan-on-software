/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}"],
  theme: {
    extend: {
      typography: {
        newDefault: {
          css: {
            "--tw-prose-body": "var(--primary-text)",
            "--tw-prose-headings": "var(--primary-text)",
            "--tw-prose-links": "var(--primary-text)",
            "--tw-prose-bold": "var(--primary-text)",
            "--tw-prose-counters": "var(--primary-text)",
            "--tw-prose-bullets": "var(--primary-text)",
            "--tw-prose-hr": "var(--primary-text)",
            "--tw-prose-quotes": "var(--hover-text)",
            "--tw-prose-quote-borders": "var(--hover-text)",
            "--tw-prose-captions": "var(--primary-text)",
            "--tw-prose-code": "var(--hover-text)",
            "--tw-prose-code-background": "var(--bg-code)",
            "--tw-prose-th-borders": "var(--primary-text)",
            "--tw-prose-td-borders": "var(--primary-text)",
            a: {
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              transition: "color 0.2s",
              "&:hover": {
                color: "var(--links)",
              },
            },
            h1: {
              fontFamily: "var(--font-display)",
              fontWeight: "400",
              fontSize: "2.25rem",
            },
            h2: {
              color: "var(--primary-text)",
              fontWeight: "400",
              fontSize: "1.875rem",
              marginTop: "2.5rem",
              marginBottom: "1rem",
            },
            p: {
              color: "var(--primary-text)",
              fontWeight: "100",
              letterSpacing: "0.05em",
              marginBottom: "1rem",
            },
            pre: {
              backgroundColor: "var(--code-bg)",
              color: "var(--primary-text)",
              padding: "1rem",
              borderRadius: "0.5rem",
              overflowX: "auto",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            },
            code: {
              fontFamily: "var(--font-mono)",
              color: "var(--primary-text)",
              backgroundColor: "var(--bg-button)",
              padding: "0.25rem 0.5rem",
              borderRadius: "0.25rem",
              fontWeight: "400",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            },
            blockquote: {
              fontStyle: "italic",
              paddingLeft: "1rem",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              fontWeight: "300",
            },
            li: {
              marginBottom: "0.5rem",
              paddingLeft: "1.5rem",
            },
            "li::marker": {
              color: "var(--hover-text)",
            },
            img: {
              borderRadius: "0.5rem",
            },
            table: {
              width: "100%",
              overflowX: "auto",
              display: "block", 
              fontSize: "0.875rem",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              borderCollapse: "collapse",
            },
            th: {
              borderColor: "var(--primary-text)",
              padding: "0.5rem 1rem",
            },
            td: {
              borderColor: "var(--primary-text)",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
