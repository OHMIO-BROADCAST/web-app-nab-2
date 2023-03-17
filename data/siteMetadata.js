const siteMetadata = {
  title: 'OHMIO Broadcast',
  author: 'OHMIO',
  headerTitle: 'OHMIO',
  description: 'The ultimate tool for Broadcast Industry based on Web3 and IoT',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://ohmiobroadcast.io',
  siteRepo: 'https://github.com/ohmio-broadcast/web-app-nab-2',
  siteLogo: '/static/images/logoblanco.png',
  image: '/static/images/logoblanco.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'support@ohmiobroadcast.io',
  github: 'https://github.com/ohmio-broadcast',
  twitter: 'https://twitter.com/ohmio',
  facebook: 'https://facebook.com/ohmio',
  linkedin: 'https://www.linkedin.com/in/ohmio-broadcast/',
  spotify: 'https://open.spotify.com/user/12162121994?si=e685b3546f414967',
  steam: 'https://steamcommunity.com/id/ohmio/',
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
