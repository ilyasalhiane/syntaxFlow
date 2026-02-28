import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SyntaxFlow | State-Engineered Web Solutions',
  description:
    'SyntaxFlow is an elite IT agency delivering state-engineered web platforms, cloud networking infrastructure, and creative motion-powered digital experiences.',
  keywords: [
    'SyntaxFlow',
    'Next.js agency',
    'Cloud infrastructure',
    'Networking solutions',
    'Digital motion',
    'State engineer',
  ],
  openGraph: {
    title: 'SyntaxFlow | State-Engineered Web Solutions',
    description:
      'Architecting high-performance digital solutions across web engineering, cloud networking, and creative technology.',
    type: 'website',
    url: 'https://syntaxflow.com',
    siteName: 'SyntaxFlow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SyntaxFlow | State-Engineered Web Solutions',
    description:
      'Elite IT agency bridging deep infrastructure expertise with premium digital experiences.',
  },
  metadataBase: new URL('https://syntaxflow.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body
        className={`${inter.variable} min-h-screen bg-slate-950 font-sans text-slate-100 antialiased`}
      >
        <div className='pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(14,116,144,0.2),transparent_40%),linear-gradient(180deg,#020617_0%,#020617_100%)]' />
        {children}
      </body>
    </html>
  );
}
