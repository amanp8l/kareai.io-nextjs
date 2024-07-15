import { Manrope } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import BootstrapClient from './components/BootstrapClient';
import Header from './components/Header';
import Footer from './components/Footer';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: "Kare AI",
  description: "World's 1st Gen AI Agent Service Platform ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./img/logo.svg"  type="image/svg+xml" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={manrope.className}>
        <Header />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
