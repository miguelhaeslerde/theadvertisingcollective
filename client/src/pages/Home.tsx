import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <CTA />
    </Layout>
  );
}
