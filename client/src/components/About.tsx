import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function About() {
  const stats = [
    { value: '15+', label: 'Jahre Erfahrung' },
    { value: '500+', label: 'Erfolgreiche Projekte' },
    { value: '200+', label: 'Zufriedene Kunden' },
    { value: '2', label: 'Experten im Team' },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_rgba(255,236,65,0.2)_0%,_transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(255,236,65,0.15)_0%,_transparent_50%)] animate-float"></div>
        <div className="absolute bottom-0 left-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_100%,_rgba(255,236,65,0.1)_0%,_transparent_50%)] animate-float-delayed"></div>
      </div>
      
      {/* Moving Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(255,255,255,0.1)_25px,rgba(255,255,255,0.1)_26px,transparent_27px,transparent_74px,rgba(255,255,255,0.1)_75px,rgba(255,255,255,0.1)_76px,transparent_77px),linear-gradient(transparent_24px,rgba(255,255,255,0.1)_25px,rgba(255,255,255,0.1)_26px,transparent_27px,transparent_74px,rgba(255,255,255,0.1)_75px,rgba(255,255,255,0.1)_76px,transparent_77px)] bg-[size:100px_100px] animate-grid-move"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        {/* Main Heading */}
        <div className="mb-20">
          <h2 className="font-bowlby text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-tight mb-8 relative">
            ÜBER THE{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent-yellow">ADVERTISING</span>
              <div className="absolute inset-0 text-accent-yellow blur-sm opacity-30 animate-pulse-slow"></div>
            </span>{' '}
            COLLECTIVE
          </h2>
          <div className="flex justify-center mb-12">
            <div className="w-32 h-1 bg-accent-yellow rounded-full animate-expand-glow"></div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto mb-20">
          <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-12 font-light">
            Wir sind <span className="text-accent-yellow font-bold">die Spezialisten</span> für Unternehmen, 
            die endlich unter die <span className="text-accent-yellow font-bold">TOP 3</span> ihrer Branche kommen wollen.
          </p>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-16">
            Mit über 15 Jahren Erfahrung und bewährten Strategien haben wir bereits 
            über 500 Unternehmen dabei geholfen, ihre Marktposition zu revolutionieren.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-accent-yellow/30 hover:border-accent-yellow transition-all duration-300 hover:-translate-y-2">
                <div className="font-bowlby text-5xl md:text-6xl text-accent-yellow mb-4 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-white font-medium text-lg">
                  {stat.label}
                </div>
                {/* Floating accent */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent-yellow rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="bg-accent-yellow/10 backdrop-blur-sm rounded-3xl p-12 border border-accent-yellow/30">
            <h3 className="font-bowlby text-3xl md:text-4xl lg:text-5xl text-white mb-8 leading-tight">
              BEREIT FÜR DEN SPRUNG IN DIE{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent-yellow">TOP 3</span>
                <div className="absolute inset-0 text-accent-yellow blur-sm opacity-30 animate-pulse-slow"></div>
              </span>?
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Lassen Sie uns in einem kostenlosen Strategiegespräch analysieren, 
              wie Sie endlich die Marktführerschaft in Ihrer Branche erreichen.
            </p>
            
            <div className="flex justify-center">
              <Link href="/contact" className="w-full max-w-4xl">
                <Button className="bg-accent-yellow hover:bg-yellow-300 text-gray-900 py-12 px-16 rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 w-full">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bowlby font-bold mb-3">JETZT KOSTENLOS BEWERBEN</div>
                    <div className="text-lg md:text-xl font-normal italic" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>UND EIN PITCH DECK ANFORDERN</div>
                  </div>
                </Button>
              </Link>
            </div>
            
            {/* Floating elements for visual impact */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-accent-yellow/20 rounded-full animate-bounce-slow"></div>
            <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-accent-yellow/30 rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
