import './globals.css';

export const metadata = {
  metadataBase: new URL('https://kafkachips.jadiaja.com'),
  title: 'KafkaChips - Keripik Premium Khas Malang',
  description:
    'Keripik premium khas Malang. Nikmati cita rasa autentik Indonesia: Keripik Nangka, Keripik Salak, Pisang Stik, dan Rambak Pisang tanpa pengawet.',
  keywords: [
    'keripik',
    'keripik nangka',
    'keripik salak',
    'pisang stik',
    'rambak pisang',
    'malang',
    'kafkachips'
  ],
  openGraph: {
    title: 'KafkaChips - Keripik Premium Khas Malang',
    description:
      'Keripik premium khas Malang. Nikmati cita rasa autentik Indonesia: Keripik Nangka, Keripik Salak, Pisang Stik, dan Rambak Pisang tanpa pengawet.',
    url: 'https://kafkachips.jadiaja.com/',
    siteName: 'KafkaChips',
    images: ['/assets/all.webp'],
    locale: 'id_ID',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KafkaChips - Keripik Premium Khas Malang',
    description:
      'Keripik premium khas Malang. Nikmati cita rasa autentik Indonesia: Keripik Nangka, Keripik Salak, Pisang Stik, dan Rambak Pisang tanpa pengawet.',
    images: ['/assets/all.webp']
  },
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: '/assets/favicon.ico'
  }
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KafkaChips',
  url: 'https://kafkachips.jadiaja.com/',
  logo: 'https://kafkachips.jadiaja.com/assets/all.webp',
  description:
    'Keripik premium khas Malang. Nikmati cita rasa autentik Indonesia: Keripik Nangka, Keripik Salak, Pisang Stik, dan Rambak Pisang tanpa pengawet.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'RT.01/RW.01, Sumbermanggis, Jogomulyo',
    addressLocality: 'Kec. Tirtoyudo, Kabupaten Malang',
    addressRegion: 'Jawa Timur',
    postalCode: '65182',
    addressCountry: 'ID'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+62-823-0204-6403',
    contactType: 'Customer Service',
    areaServed: 'ID',
    availableLanguage: 'Indonesian'
  },
  sameAs: [
    'https://shopee.co.id/dutachips',
    'https://www.tokopedia.com/dutachips',
    'https://www.tiktok.com/@kafkachips'
  ]
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'KafkaChips',
  url: 'https://kafkachips.jadiaja.com/'
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="stylesheet" href="/legacy/style.css" />
      </head>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </body>
    </html>
  );
}
