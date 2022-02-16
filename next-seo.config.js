/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: process.env.NEXT_PUBLIC_SITE_NAME,
  titleTemplate: '%s',
  defaultTitle: process.env.NEXT_PUBLIC_SITE_NAME,
  description:
    'DNF. Worldwide based custom software development & consulting company focusing on web, mobile, desktop & embedded software development. ',
  canonical: process.env.NEXT_PUBLIC_SITE_URL,
  openGraph: {
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: process.env.NEXT_PUBLIC_SITE_NAME,
    description:
      'DNF. Worldwide based custom software development & consulting company focusing on web, mobile, desktop & embedded software development. ',
    images: [
      {
        url: 'https://res.cloudinary.com/andrewphan/image/upload/v1645004991/dnf-soft/image-4_ugqjei.png',
        alt: `${process.env.NEXT_PUBLIC_SITE_URL} og-image`,
      },
    ],
    site_name: process.env.NEXT_PUBLIC_SITE_NAME,
  },
  twitter: {
    handle: '@dnfsoft',
    cardType: 'summary_large_image',
  },
}

export default defaultSEOConfig
