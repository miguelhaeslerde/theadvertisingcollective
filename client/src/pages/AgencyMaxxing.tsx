import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function AgencyMaxxing() {
  return (
    <Layout
      title="Agency Maxxing - The Advertising Collective"
      description="Maximieren Sie das Potenzial Ihrer Agentur mit unseren speziellen Agency Maxxing Strategien und Methoden."
    >
      <section className="bg-main-bg dark:bg-main-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bowlby text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
            <span className="text-accent-yellow">AGENCY MAXXING</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Maximieren Sie das Potenzial Ihrer Agentur mit bewährten Strategien und Methoden.
          </p>
          
          <div className="bg-gray-900 rounded-2xl shadow-2xl mb-8 aspect-video max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent-yellow rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white text-lg font-medium">Agency Maxxing Präsentation</p>
                <p className="text-gray-300 text-sm">Klicken Sie hier, um mehr zu erfahren</p>
              </div>
            </div>
          </div>

          <Link href="/">
            <Button className="bg-accent-yellow hover:bg-yellow-300 text-gray-900 font-bowlby py-4 px-8 text-base">
              JETZT KOSTENLOS BEWERBEN
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}