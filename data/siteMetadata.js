const siteMetadata = {
  title: 'CRIPGOLD',
  author: 'CRIPGOLD',
  headerTitle: 'CRIPGOLD',
  description: 'Servicios de oro',
  language: 'es-co',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://cripgold.com',
  siteRepo: 'https://github.com/bracarli/cripgold-landing',
  siteLogo: '/static/images/logoblanco.png',
  image: '/static/images/logoblanco.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'cripgold@gmail.com',
  github: 'https://github.com/bracarli',
  twitter: 'https://twitter.com/cripgold',
  facebook: 'https://facebook.com/cripgold',
  linkedin: 'https://www.linkedin.com/in/dale-larroder/',
  spotify: 'https://open.spotify.com/user/12162121994?si=e685b3546f414967',
  steam: 'https://steamcommunity.com/id/cripgold/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
