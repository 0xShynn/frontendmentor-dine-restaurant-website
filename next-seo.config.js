const canonicalUrl =
  'https://frontendmentor-dine-restaurant-website.vercel.app/';

const defaultTitle = 'Dine Restaurant';

export const SEO = {
  defaultTitle: defaultTitle,
  titleTemplate: 'Dine Restaurant | %s',
  canonical: canonicalUrl,
  openGraph: {
    title: 'Dine Restaurant • Exquisite dining since 1989',
    type: 'website',
    locale: 'en_IE',
    url: canonicalUrl,
  },
  twitter: {
    handle: '@dine_restaurant',
    site: '@dine_restaurant',
    cardType: 'summary_large_image',
  },
};

export default SEO;
