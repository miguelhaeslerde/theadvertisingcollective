import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import CustomerLogos from '@/components/CustomerLogos';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';

// Top Provider Section Component
function TopProviderSection() {
  return (
    <section className="py-20 bg-brightest dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-bowlby text-4xl md:text-6xl text-gray-900 dark:text-white leading-tight">
            Du bist unter den{' '}
            <span className="text-accent-yellow bg-gray-900 dark:bg-accent-yellow dark:text-gray-900 px-4 py-2 rounded-lg inline-block">
              TOP 10
            </span>{' '}
            Anbietern deines Marktes?
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-accent-yellow rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Top Three Section Component
function TopThreeSection() {
  return (
    <section className="py-20 bg-main-bg dark:bg-main-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-bowlby text-4xl md:text-6xl text-gray-900 dark:text-white leading-tight">
            Du versuchst{' '}
            <span className="text-gray-500 dark:text-gray-400">seit Jahren</span>{' '}
            vergeblich unter die{' '}
            <span className="relative">
              <span className="text-accent-yellow">TOP 3</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-accent-yellow rounded-full"></div>
            </span>{' '}
            zu kommen?
          </h2>
          <div className="mt-12 flex justify-center space-x-4">
            <div className="w-8 h-8 bg-accent-yellow rounded-full opacity-30"></div>
            <div className="w-8 h-8 bg-accent-yellow rounded-full opacity-60"></div>
            <div className="w-8 h-8 bg-accent-yellow rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <Hero />
      <CustomerLogos />
      <TopProviderSection />
      <TopThreeSection />
      <Services />
      <About />
      <Contact />
    </Layout>
  );
}