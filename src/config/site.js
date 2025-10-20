const site = {
  // pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Kishore Kumar A', // Navigation and site title
  titleAlt: 'Kishore Kumar A', // Title for schema.org JSONLD
  // eslint-disable-next-line prettier/prettier
  description: 'Founder | AI Enthusiast | Passionate About Space, Cosmology, and Deep Tech | Building the Future of AI Solutions and Space Exploration',
  url: 'https://kishore2494.github.io/personal-site', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  image: {
    // Used for SEO, relative to /static/ folder
    src: '/images/theme/kishore-logo.png',
    width: 675,
    height: 675,
  },
  ogLanguage: 'en_US', // Facebook Language

  // Site config
  feedUrl: '/rss.xml',
  copyrights: `&copy; 2025 <a href="https://kishore2494.github.io">Kishore Kumar A</a>. All rights reserved.`,
  defaultTheme: 'light',
  postsPerPage: 10,

  // JSONLD / Manifest
  favicon: '/images/theme/kishore-logo.png', // Used for manifest favicon generation
  shortName: 'Kishore Kumar', // shortname for manifest. MUST be shorter than 12 characters
  author: {
    // Author for schema.org JSONLD
    name: 'Kishore Kumar A',
    url: 'https://kishore2494.github.io/personal-site',
  },
  themeColor: '#ffffff',
  backgroundColor: '#111111',
  
  // Analytics Configuration
  analytics: {
    ga4: {
      measurementId: 'G-RGPN7NRJDQ', 
      enhancedMeasurement: true,
      conversionEvents: [
        'phone_click',
        'form_submit', 
        'resource_download',
        'email_click'
      ],
      customDimensions: {
        content_group1: 'custom_dimension_1', // Collection type
        content_group2: 'custom_dimension_2', // Category/tag
      },
      customMetrics: {
        engagement_score: 'custom_metric_1',
        conversion_value: 'custom_metric_2',
      }
    },
    clarity: {
      projectId: 'sw2f0ourfn', // Replace with actual Clarity project ID
      enableHeatmaps: true,
      enableRecordings: true,
      privacyMode: 'balanced',
      cookieConsent: true,
    },
    privacy: {
      enableOptOut: true,
      cookieConsentRequired: true,
      dataRetentionDays: 365,
      anonymizeIp: true,
      respectDoNotTrack: true,
      consentStorageKey: 'meteoric_analytics_consent',
    },
    enabled: true,
    debug: false, // Set to true for development
  },

  // Indie web
  pingbackUrl: 'https://webmention.io/alokprateek.in/xmlrpc',
  webmentionUrl: 'https://webmention.io/alokprateek.in/webmention',
  micropubUrl: '', //todo: add url after creating the api for micropub
  staticmanApi:
    'https://meteoric-teachings.herokuapp.com/v2/entry/theWhiteWulfy/personal-site/master/comments',

  // Social links and ids
  twitter: '@kishore2494', // Twitter username
  twitterUrl: 'https://twitter.com/kishore2494',
  facebook: 'Kishore Kumar A', // Facebook site name
  linkedinUrl: 'https://www.linkedin.com/in/kishore-kumar-11184a196/',
  githubUrl: 'https://github.com/kishore2494',
  instagramUrl: '', // Add your Instagram if you have one
  whatsappUrl: 'https://wa.me/919344901628', // WhatsApp number with country code
  emailAddress: 'akishorekumar2494@gmail.com', // Email address
  emailUrl: 'mailto:akishorekumar2494@gmail.com',

  // tokens and keys
  githubApiToken: process.env.GITHUB_API_TOKEN,
  reCaptcha: {
    siteKey: '',
    secret:
      // eslint-disable-next-line max-len
      '',
  },


  // Menus - header(main) & footer
  mainMenu: [
    {
      title: 'Blog',
      path: '/personal-site/articles/',
    },
    {
      title: 'Projects',
      path: '/personal-site/works/',
    },
    {
      title: 'About',
      path: '/personal-site/about/',
    },
    {
      title: 'Contact',
      path: '/personal-site/contact/',
    },
  ],
      footerMenu: [],
  
}

export default site;