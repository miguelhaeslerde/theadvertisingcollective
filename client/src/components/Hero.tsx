import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function Hero() {
  return (
    <section className="bg-main-bg dark:bg-main-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-bowlby text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6">
              WIR MACHEN IHR{' '}
              <span className="text-accent-yellow">UNTERNEHMEN</span>{' '}
              ERFOLGREICHER
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Als führende Unternehmensberatung unterstützen wir Sie bei der strategischen Neuausrichtung, 
              digitalen Transformation und nachhaltigen Geschäftsentwicklung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-accent-yellow hover:bg-yellow-300 text-gray-900 font-bold py-4 px-8 text-base">
                  KOSTENLOSE BERATUNG
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 font-bold py-4 px-8 text-base"
                >
                  MEHR ERFAHREN
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional business consultation meeting"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent-yellow p-6 rounded-xl shadow-lg">
              <div className="font-bowlby text-2xl text-gray-900">500+</div>
              <div className="text-sm text-gray-700 font-medium">Erfolgreiche Projekte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
