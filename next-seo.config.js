/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: process.env.NEXT_PUBLIC_SITE_NAME,
  titleTemplate: '%s',
  defaultTitle: process.env.NEXT_PUBLIC_SITE_NAME,
  description: 'Next.js + chakra-ui + TypeScript template',
  canonical: process.env.NEXT_PUBLIC_SITE_URL,
  openGraph: {
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: process.env.NEXT_PUBLIC_SITE_NAME,
    description: 'Next.js + chakra-ui + TypeScript template',
    images: [
      {
        url: 'https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250',
        alt: `${ process.env.NEXT_PUBLIC_SITE_URL} og-image`,
      },
    ],
    site_name: process.env.NEXT_PUBLIC_SITE_NAME,
  },
  twitter: {
    handle: '@sozonome',
    cardType: 'summary_large_image',
  },
}

export default defaultSEOConfig
