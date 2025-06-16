import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import CustomerLogos from '@/components/CustomerLogos';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import InteractiveGlobe from '@/components/InteractiveGlobe';

// Top Provider Section Component
function TopProviderSection() {
  return (
    <section className="py-20 bg-brightest dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-bowlby text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 dark:text-white leading-tight animate-fade-in-up">
              Du bist unter den{' '}
              <span className="text-accent-yellow bg-gray-900 dark:bg-accent-yellow dark:text-gray-900 px-3 py-2 rounded-lg inline-block animate-pulse-glow transform hover:scale-110 transition-all duration-300">
                TOP 10
              </span>{' '}
              Anbietern deines Marktes?
            </h2>
            <div className="mt-8 flex justify-start">
              <div className="w-24 h-1 bg-accent-yellow rounded-full animate-expand"></div>
            </div>
            <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Dann ist es Zeit für den nächsten Schritt. Wir helfen erfolgreichen Unternehmen dabei, 
              ihre Marktposition zu dominieren und nachhaltiges Wachstum zu erzielen.
            </p>
          </div>
          
          {/* Interactive 3D Globe */}
          <div className="order-1 lg:order-2">
            <InteractiveGlobe />
          </div>
          
          {/* Floating elements animation */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-accent-yellow opacity-10 rounded-full animate-float"></div>
          <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-accent-yellow opacity-20 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 -left-20 w-12 h-12 bg-accent-yellow opacity-15 rounded-full animate-bounce-slow"></div>
        </div>
      </div>
    </section>
  );
}

// Top Three Section Component
function TopThreeSection() {
  return (
    <section className="py-20 bg-main-bg dark:bg-main-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative">
          <h2 className="font-bowlby text-4xl md:text-6xl text-gray-900 dark:text-white leading-tight animate-fade-in-up">
            Du versuchst{' '}
            <span className="text-gray-500 dark:text-gray-400 animate-shake">seit Jahren</span>{' '}
            vergeblich unter die{' '}
            <span className="relative">
              <span className="text-accent-yellow animate-glow">TOP 3</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-accent-yellow rounded-full animate-slide-right"></div>
            </span>{' '}
            zu kommen?
          </h2>
          {/* 3D Animated Trophy/Award */}
          <div className="mt-16 flex justify-center">
            <div className="relative animate-trophy-float">
              {/* Trophy Base */}
              <div className="relative w-24 h-32 animate-trophy-tilt">
                {/* Trophy Cup */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 rounded-t-full shadow-2xl animate-trophy-shine">
                  {/* Trophy Handles */}
                  <div className="absolute top-4 -left-2 w-4 h-8 border-4 border-yellow-500 rounded-full border-r-transparent"></div>
                  <div className="absolute top-4 -right-2 w-4 h-8 border-4 border-yellow-500 rounded-full border-l-transparent"></div>
                  
                  {/* Trophy Shine Effect */}
                  <div className="absolute top-2 left-2 w-6 h-12 bg-white opacity-30 rounded-full blur-sm animate-shine-sweep"></div>
                  
                  {/* Trophy Number "3" */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-900 font-bowlby text-xl font-bold">3</div>
                </div>
                
                {/* Trophy Stem */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-gradient-to-b from-yellow-600 to-yellow-700"></div>
                
                {/* Trophy Base */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-gradient-to-b from-yellow-700 to-yellow-800 rounded-lg shadow-lg"></div>
                
                {/* Floating "Just Out of Reach" Elements */}
                <div className="absolute -top-4 -left-4 w-3 h-3 bg-red-400 rounded-full animate-struggle-float opacity-60"></div>
                <div className="absolute -top-6 right-2 w-2 h-2 bg-red-500 rounded-full animate-struggle-float-delayed opacity-40"></div>
                <div className="absolute top-2 -right-6 w-4 h-4 bg-orange-400 rounded-full animate-struggle-bounce opacity-50"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-8 h-8 bg-accent-yellow rounded-full opacity-30 animate-bounce-sequence-1"></div>
            <div className="w-8 h-8 bg-accent-yellow rounded-full opacity-60 animate-bounce-sequence-2"></div>
            <div className="w-8 h-8 bg-accent-yellow rounded-full animate-bounce-sequence-3"></div>
          </div>
          
          {/* Animated stress indicators */}
          <div className="absolute top-10 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-stress-pulse"></div>
          <div className="absolute top-20 right-1/3 w-3 h-3 bg-red-300 rounded-full animate-stress-pulse-delayed"></div>
          
          {/* Progress bars showing struggle */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
            <div className="h-full bg-accent-yellow rounded-full animate-progress-struggle"></div>
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