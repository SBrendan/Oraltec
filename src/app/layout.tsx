import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';

import Providers from '~/app/providers';
import Footer from '~/lib/components/Footer';
import Header from '~/lib/components/Header';
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
  description: `Découvrez les services dentaires complets d'Oraltec : prothèses sur mesure, barres implantaires, gouttières de blanchiment, réparations personnalisées, et plus encore. Qualité, précision et innovation font d'Oraltec le partenaire idéal pour vos besoins dentaires.`,
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
    description: `Découvrez les services dentaires complets d&apos;Oraltec : prothèses sur mesure, barres implantaires, gouttières de blanchiment, réparations personnalisées, et plus encore. Qualité, précision et innovation font d'Oraltec le partenaire idéal pour vos besoins dentaires.`,
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
      rel: 'shortcut icon',
      type: 'image/x-icon',
      url: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
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
          <Header />
          <Suspense fallback={<p>Chargement...</p>}>
            <Layout>{children}</Layout>
          </Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
