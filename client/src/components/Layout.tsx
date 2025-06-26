import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import LegalModal from './LegalModal';
import CookieBanner from './CookieBanner';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ 
  children, 
  title = "The Advertising Collective - Professionelle Unternehmensberatung",
  description = "The Advertising Collective - Ihr Partner für strategische Unternehmensberatung und digitale Transformation in Deutschland."
}: LayoutProps) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      
      <div className="min-h-screen bg-main-bg dark:bg-main-dark">
        <Header />
        <main>{children}</main>
        <Footer />
        <LegalModal />
        <CookieBanner />
      </div>
    </>
  );
}
