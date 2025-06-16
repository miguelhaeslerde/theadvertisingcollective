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
    <section className="pt-20 py-20 bg-brightest dark:bg-gray-800 relative" style={{marginTop: '-2rem'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bowlby text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">
            UNSERE LEISTUNGEN
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Wir bieten maßgeschneiderte Beratungslösungen für Unternehmen jeder Größe - 
            von Start-ups bis hin zu etablierten Konzernen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="bg-main-bg dark:bg-main-dark hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="text-accent-yellow text-4xl mb-4">
                    <IconComponent className="h-10 w-10" />
                  </div>
                  <h3 className="font-bowlby text-xl text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="text-accent-yellow font-bold hover:underline inline-flex items-center gap-2"
                  >
                    Mehr erfahren <ArrowRight className="h-4 w-4" />
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
