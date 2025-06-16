import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import CustomerLogos from '@/components/CustomerLogos';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <CustomerLogos />
      <Services />
      <About />
      <Contact />
    </Layout>
  );
}
