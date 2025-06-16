import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function Hero() {
  return (
    <section className="bg-main-bg dark:bg-main-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-bowlby text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-8">
            WIR MACHEN DACHs{' '}
            <span className="relative">
              <span className="bg-accent-yellow text-gray-900 px-4 py-2 inline-block transform -rotate-1">
                AGENTUR & COACHING ELITE
              </span>
            </span>{' '}
            REICHER...
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            ...durch Full-Circle Acquisition
          </p>
          
          {/* VSL Video Placeholder */}
          <div className="bg-gray-900 rounded-2xl shadow-2xl mb-8 aspect-video max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent-yellow rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white text-lg font-medium">VSL Video</p>
                <p className="text-gray-300 text-sm">Klicken Sie hier, um das Video zu starten</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent-yellow hover:bg-yellow-300 text-gray-900 font-bowlby py-4 px-8 text-base">
              JETZT KOSTENLOS BEWERBEN
            </Button>
            <Button
              variant="outline"
              className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 font-bowlby py-4 px-8 text-base"
            >
              UND EIN PITCH DECK ERHALTEN
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
