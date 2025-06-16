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
    <section className="py-32 bg-gradient-to-br from-gray-900 via-red-900 to-black dark:from-black dark:via-red-950 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_rgba(255,0,0,0.3)_0%,_transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(255,69,0,0.3)_0%,_transparent_50%)] animate-float"></div>
        <div className="absolute bottom-0 left-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_100%,_rgba(255,140,0,0.2)_0%,_transparent_50%)] animate-float-delayed"></div>
      </div>
      
      {/* Moving Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(255,255,255,0.1)_25px,rgba(255,255,255,0.1)_26px,transparent_27px,transparent_74px,rgba(255,255,255,0.1)_75px,rgba(255,255,255,0.1)_76px,transparent_77px),linear-gradient(transparent_24px,rgba(255,255,255,0.1)_25px,rgba(255,255,255,0.1)_26px,transparent_27px,transparent_74px,rgba(255,255,255,0.1)_75px,rgba(255,255,255,0.1)_76px,transparent_77px)] bg-[size:100px_100px] animate-grid-move"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center">
          <h2 className="font-bowlby text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-16 relative">
            Du versuchst seit Jahren vergeblich unter die
          </h2>
          
          {/* TOP 3 as separate prominent line */}
          <div className="relative mb-16">
            <div className="relative inline-block">
              <span className="relative z-10 font-bowlby text-8xl md:text-[10rem] lg:text-[14rem] xl:text-[16rem] font-black text-accent-yellow drop-shadow-2xl">
                TOP 3
              </span>
              {/* Yellow glow effect - more subtle and readable */}
              <div className="absolute inset-0 text-accent-yellow font-bowlby text-8xl md:text-[10rem] lg:text-[14rem] xl:text-[16rem] font-black blur-sm opacity-30 animate-pulse-slow"></div>
              
              {/* Power indicators in brand colors */}
              <div className="absolute -top-8 -right-8 w-4 h-4 bg-accent-yellow rounded-full animate-ping"></div>
              <div className="absolute -bottom-8 -left-8 w-3 h-3 bg-accent-yellow rounded-full animate-ping animation-delay-200"></div>
              <div className="absolute -top-4 -left-12 w-2 h-2 bg-accent-yellow rounded-full animate-ping animation-delay-400"></div>
            </div>
          </div>
          
          <h3 className="font-bowlby text-4xl md:text-6xl lg:text-7xl text-white leading-tight relative">
            zu kommen?
          </h3>
          
          <div className="mt-16 flex justify-center">
            <div className="w-32 h-1 bg-accent-yellow rounded-full animate-expand-glow"></div>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-accent-yellow rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-accent-yellow rounded-full animate-float-delayed opacity-40"></div>
      <div className="absolute bottom-32 left-16 w-2 h-2 bg-accent-yellow rounded-full animate-bounce-slow opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-accent-yellow rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-60 left-1/3 w-2 h-2 bg-accent-yellow rounded-full animate-float opacity-30"></div>
      <div className="absolute top-80 right-1/4 w-3 h-3 bg-accent-yellow rounded-full animate-bounce-slow opacity-40"></div>
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