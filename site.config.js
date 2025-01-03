const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Gaétan Dumas",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Technical Artist",
    bio: "Student in VideoGame and VFX",
    email: "gaetan.dumas.3d@gmail.com",
    linkedin: "gaetdums",
    github: "gaetan144hz",
    instagram: "g144hz_3d",
  },
  projects: [
    {
      name: `StandUpAndDontDie`,
      href: "https://gaetan144hz.itch.io/stand-up-and-dont-die",
    },
    {
      name: `Iris The Leaving Root`,
      href: "https://gaetan144hz.itch.io/iris-the-leaving-root",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Gaétan Dumas",
    description: "Welcome on my Portfolio!",
  },

  // CONFIG configration (required)
  link: "https://gaetan-dumas.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
