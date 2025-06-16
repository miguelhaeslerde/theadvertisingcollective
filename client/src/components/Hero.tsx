import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function Hero() {
  return (
    <section className="bg-main-bg dark:bg-main-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-bowlby text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-8 leading-tight">
            WIR MACHEN DACHs{' '}
            <span className="relative inline-block">
              <span className="bg-gray-900 dark:bg-accent-yellow text-accent-yellow dark:text-gray-900 px-6 py-3 inline-block transform -rotate-1 shadow-lg">
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

          <div className="flex justify-center my-12">
            <Button className="bg-accent-yellow hover:bg-yellow-300 text-gray-900 py-12 px-16 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 w-full max-w-4xl">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bowlby font-bold mb-3">JETZT KOSTENLOS BEWERBEN</div>
                <div className="text-lg md:text-xl font-normal italic" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>UND EIN PITCH DECK ANFORDERN</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
