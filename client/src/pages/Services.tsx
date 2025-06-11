import Layout from '@/components/Layout';
import { TrendingUp, Cpu, Users, Settings, Handshake, GraduationCap, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: TrendingUp,
    title: 'Strategieberatung',
    description: 'Entwicklung zukunftsfähiger Unternehmensstrategien und nachhaltiger Wachstumskonzepte für Ihren Markterfolg.',
    features: [
      'Strategische Analyse und Marktbewertung',
      'Geschäftsmodell-Innovation',
      'Wettbewerbsanalyse',
      'Roadmap-Entwicklung',
    ],
  },
  {
    icon: Cpu,
    title: 'Digitale Transformation',
    description: 'Begleitung Ihres Unternehmens auf dem Weg in die digitale Zukunft mit innovativen Technologien und Prozessen.',
    features: [
      'Digital Strategy Development',
      'Technology Assessment',
      'Digitalisierung von Geschäftsprozessen',
      'Cloud Migration',
    ],
  },
  {
    icon: Users,
    title: 'Change Management',
    description: 'Professionelle Begleitung von Veränderungsprozessen zur erfolgreichen Umsetzung strategischer Initiativen.',
    features: [
      'Veränderungsanalyse',
      'Stakeholder Management',
      'Kommunikationsstrategien',
      'Training und Coaching',
    ],
  },
  {
    icon: Settings,
    title: 'Prozessoptimierung',
    description: 'Analyse und Optimierung Ihrer Geschäftsprozesse für mehr Effizienz und Kostenreduktion.',
    features: [
      'Prozessanalyse und -mapping',
      'Lean Management',
      'Automatisierungspotentiale',
      'KPI-Entwicklung',
    ],
  },
  {
    icon: Handshake,
    title: 'M&A Beratung',
    description: 'Expertenunterstützung bei Fusionen, Übernahmen und strategischen Partnerschaften.',
    features: [
      'Due Diligence',
      'Unternehmensbewertung',
      'Transaktionsbegleitung',
      'Post-Merger Integration',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Training & Coaching',
    description: 'Individuelle Weiterbildungsprogramme und Executive Coaching für Führungskräfte.',
    features: [
      'Leadership Development',
      'Executive Coaching',
      'Team Building',
      'Skill Assessment',
    ],
  },
];

export default function Services() {
  return (
    <Layout
      title="Leistungen - The Advertising Collective"
      description="Entdecken Sie unser umfassendes Portfolio an Beratungsleistungen: Strategieberatung, Digitale Transformation, Change Management und mehr."
    >
      {/* Hero Section */}
      <section className="bg-main-bg dark:bg-main-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bowlby text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
            UNSERE <span className="text-accent-yellow">LEISTUNGEN</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Maßgeschneiderte Beratungslösungen für Unternehmen jeder Größe. 
            Wir begleiten Sie von der strategischen Planung bis zur erfolgreichen Umsetzung.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-brightest dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-main-bg dark:bg-main-dark">
                  <CardContent className="p-8">
                    <div className="text-accent-yellow text-5xl mb-6">
                      <IconComponent className="h-12 w-12" />
                    </div>
                    <h3 className="font-bowlby text-2xl text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-accent-yellow flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bowlby text-3xl md:text-4xl text-white mb-6">
            LASSEN SIE UNS ÜBER IHR PROJEKT SPRECHEN
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Jedes Unternehmen ist einzigartig. Kontaktieren Sie uns für eine kostenlose 
            Erstberatung und erfahren Sie, wie wir Ihnen helfen können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-accent-yellow hover:bg-yellow-300 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors"
            >
              KOSTENLOSE BERATUNG ANFORDERN
            </a>
            <a
              href="tel:+4989123456789"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors"
            >
              +49 89 123 456 78
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
