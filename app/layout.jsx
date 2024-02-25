import 'semantic-ui-css/semantic.min.css';
import Link from 'next/link';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Fredoka } from 'next/font/google';
import MenuBar from '@/components/MenuBar/MenuBar';
import Footer from '@/components/Footer/Footer';
<Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
      integrity="sha256-+N4/V/SbAFiW1MPBCXnfnP9QSN3+Keu+NlB+0ev/YKQ=" crossorigin="anonymous" />

const fredoka = Fredoka({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Undeniable Solutions, LLC',
  description: 'Professional landscapers servicing Hilo, Hawaii',
  keywords: 'landscapers, gardeners, hilo, trimmers, pruners'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        <MenuBar />
        {children}
        <SpeedInsights />
        <Footer />
        <video autoPlay muted loop className='video-bg'>
          <source src='/assets/AI_Videos/thunder.mp4' />
          Your browser doesn't support HTML5 video playback.
        </video>
      </body>
    </html>
  );
};
