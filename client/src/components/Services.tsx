import { TrendingUp, Cpu, Users, Settings, Handshake, GraduationCap, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';

const services = [
  {
    icon: TrendingUp,
    title: 'STRATEGIEBERATUNG',
    description: 'Entwicklung zukunftsfähiger Unternehmensstrategien und nachhaltiger Wachstumskonzepte für Ihren Markterfolg.',
  },
  {
    icon: Cpu,
    title: 'DIGITALE TRANSFORMATION',
    description: 'Begleitung Ihres Unternehmens auf dem Weg in die digitale Zukunft mit innovativen Technologien und Prozessen.',
  },
  {
    icon: Users,
    title: 'CHANGE MANAGEMENT',
    description: 'Professionelle Begleitung von Veränderungsprozessen zur erfolgreichen Umsetzung strategischer Initiativen.',
  },
  {
    icon: Settings,
    title: 'PROZESSOPTIMIERUNG',
    description: 'Analyse und Optimierung Ihrer Geschäftsprozesse für mehr Effizienz und Kostenreduktion.',
  },
  {
    icon: Handshake,
    title: 'M&A BERATUNG',
    description: 'Expertenunterstützung bei Fusionen, Übernahmen und strategischen Partnerschaften.',
  },
  {
    icon: GraduationCap,
    title: 'TRAINING & COACHING',
    description: 'Individuelle Weiterbildungsprogramme und Executive Coaching für Führungskräfte.',
  },
];

export default function Services() {
  return (
    <section className="pt-20 py-24 bg-brightest dark:bg-gray-800 relative overflow-hidden" style={{marginTop: '-2rem'}}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_rgba(255,236,65,0.1)_0%,_transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(255,236,65,0.08)_0%,_transparent_50%)] animate-float"></div>
      </div>
      
      {/* Moving Grid Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(255,236,65,0.1)_25px,rgba(255,236,65,0.1)_26px,transparent_27px,transparent_74px,rgba(255,236,65,0.1)_75px,rgba(255,236,65,0.1)_76px,transparent_77px),linear-gradient(transparent_24px,rgba(255,236,65,0.1)_25px,rgba(255,236,65,0.1)_26px,transparent_27px,transparent_74px,rgba(255,236,65,0.1)_75px,rgba(255,236,65,0.1)_76px,transparent_77px)] bg-[size:100px_100px] animate-grid-move"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-20">
          <h2 className="font-bowlby text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6 leading-tight">
            UNSERE LEISTUNGEN
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Wir bieten maßgeschneiderte Beratungslösungen für Unternehmen jeder Größe - 
            von Start-ups bis hin zu etablierten Konzernen.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-accent-yellow rounded-full animate-expand-glow"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="bg-white dark:bg-gray-900 hover:shadow-2xl hover:shadow-accent-yellow/10 transition-all duration-300 hover:-translate-y-2 border-l-4 border-accent-yellow group"
              >
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="text-accent-yellow text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-12 w-12" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-yellow/10 rounded-full group-hover:scale-150 transition-all duration-300"></div>
                  </div>
                  <h3 className="font-bowlby text-xl text-gray-900 dark:text-white mb-4 group-hover:text-accent-yellow transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="text-accent-yellow font-bold hover:text-gray-900 dark:hover:text-white inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300"
                  >
                    Mehr erfahren <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
