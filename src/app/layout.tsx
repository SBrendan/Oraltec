import type { Metadata, Viewport } from 'next';

import Providers from '~/app/providers';
import Layout from '~/lib/layout';

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = 'Oraltec | Laboratoire prothése dentaire adjointe';

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: '%s | Laboratoire prothése dentaire adjointe',
  },
  description: `Découvrez l'étendue des services dentaires proposés par Oraltec, allant des prothèses dentaires sur mesure aux solutions avancées telles que les barres implantaires, les gouttières de blanchiment, les réparations personnalisées, et bien plus encore. Notre engagement envers la qualité, la précision et l'innovation fait d'Oraltec le partenaire idéal pour répondre à tous les besoins dentaires de votre pratique.`,
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  keywords: [
    'Oraltec',
    'prothèses dentaires',
    'barres implantaires',
    'gouttières de blanchiment',
    'réparations dentaires',
    'services dentaires personnalisés',
    'laboratoire de prothésiste dentaire',
    'Rennes',
    'Bretagne',
  ],
  authors: [{ name: 'Oraltec' }],
  robots: 'index, follow',
  classification: 'Santé',
  openGraph: {
    title: APP_NAME,
    description: `Découvrez l'étendue des services dentaires proposés par Oraltec, allant des prothèses dentaires sur mesure aux solutions avancées telles que les barres implantaires, les gouttières de blanchiment, les réparations personnalisées, et bien plus encore. Notre engagement envers la qualité, la précision et l'innovation fait d'Oraltec le partenaire idéal pour répondre à tous les besoins dentaires de votre pratique.`,
    images:
      'https://images.unsplash.com/photo-1621516799962-7dad52802428?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: 'https://oraltec.fr',
    siteName: APP_NAME,
    type: 'website',
    emails: 'contact@oraltec.fr',
    countryName: 'France',
  },
  metadataBase: new URL('https://oraltec.fr'),
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      url: '/site.webmanifest',
    },
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="fr">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
