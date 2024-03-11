import 'semantic-ui-css/semantic.min.css';
import Link from 'next/link';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Lexend } from 'next/font/google';
import MenuBar from '@/components/MenuBar/MenuBar';
import Footer from '@/components/Footer/Footer';

const lexend = Lexend({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Undeniable Solutions, LLC',
  description: 'Professional landscapers servicing Hilo, Hawaii',
  keywords: 'landscapers, gardeners, hilo, trimmers, pruners'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <MenuBar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
        <video autoPlay muted loop className='video-bg'>
          <source src='/assets/videos/waterfall.mov' />
          Your browser doesn't support HTML5 video playback.
        </video>
      </body>
    </html>
  );
};
