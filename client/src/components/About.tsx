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
    <section className="py-24 bg-main-bg dark:bg-main-dark relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_rgba(255,236,65,0.1)_0%,_transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(255,236,65,0.08)_0%,_transparent_50%)] animate-float"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professional German business team in modern office environment"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-yellow/20 to-transparent"></div>
            </div>
            {/* Floating accent elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent-yellow/20 rounded-full animate-bounce-slow"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-accent-yellow/30 rounded-full animate-float"></div>
          </div>
          
          <div>
            <h2 className="font-bowlby text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-8 leading-tight">
              ÜBER THE ADVERTISING COLLECTIVE
            </h2>
            <div className="mb-8 flex justify-start">
              <div className="w-32 h-1 bg-accent-yellow rounded-full animate-expand-glow"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Seit über 15 Jahren begleiten wir Unternehmen auf ihrem Weg zu nachhaltigem Erfolg. 
              Als unabhängige Unternehmensberatung vereinen wir strategische Kompetenz mit 
              praktischer Umsetzungserfahrung.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              Unser interdisziplinäres Team aus erfahrenen Beratern, Digitalexperten und 
              Branchenspezialisten entwickelt maßgeschneiderte Lösungen für Ihre individuellen 
              Herausforderungen.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-accent-yellow/20 hover:border-accent-yellow/50 transition-all group">
                  <div className="font-bowlby text-4xl text-accent-yellow mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about">
              <Button className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-bold py-4 px-8">
                UNSER TEAM KENNENLERNEN
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
