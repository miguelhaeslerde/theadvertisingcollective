import { TrendingUp, Cpu, Users, Settings, Handshake, GraduationCap, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';

const services = [
  {
    icon: TrendingUp,
    title: 'STRATEGIEBERATUNG',
    description: 'Entwicklung zukunftsfähiger Unternehmensstrategien und nachhaltiger Wachstumskonzepte für Ihren Markterfolg.',
    details: 'Unsere erfahrenen Strategieberater analysieren Ihre aktuelle Marktposition, identifizieren Wachstumschancen und entwickeln maßgeschneiderte Strategien. Wir unterstützen Sie bei der Definition von Unternehmenszielen, der Marktanalyse und der Erstellung von Business-Plänen, die nachhaltigen Erfolg garantieren.',
    benefits: ['Marktpositionierung optimieren', 'Wachstumschancen identifizieren', 'Langfristige Ziele definieren', 'Wettbewerbsvorteile schaffen']
  },
  {
    icon: Cpu,
    title: 'DIGITALE TRANSFORMATION',
    description: 'Begleitung Ihres Unternehmens auf dem Weg in die digitale Zukunft mit innovativen Technologien und Prozessen.',
    details: 'Von der Digitalisierung bestehender Prozesse bis hin zur Implementierung neuer Technologien - wir begleiten Sie durch alle Phasen der digitalen Transformation. Unsere Experten entwickeln digitale Roadmaps, die zu Ihrem Unternehmen passen und messbaren ROI liefern.',
    benefits: ['Prozesse digitalisieren', 'Technologie-Stack modernisieren', 'Mitarbeiter schulen', 'ROI maximieren']
  },
  {
    icon: Users,
    title: 'CHANGE MANAGEMENT',
    description: 'Professionelle Begleitung von Veränderungsprozessen zur erfolgreichen Umsetzung strategischer Initiativen.',
    details: 'Veränderungen erfolgreich zu implementieren erfordert mehr als nur neue Prozesse. Wir helfen Ihnen dabei, Ihre Mitarbeiter abzuholen, Widerstände zu überwinden und eine Kultur des Wandels zu schaffen. Unser strukturierter Ansatz gewährleistet nachhaltige Transformation.',
    benefits: ['Mitarbeiter motivieren', 'Widerstände überwinden', 'Kommunikation optimieren', 'Transformation nachhaltig gestalten']
  },
  {
    icon: Settings,
    title: 'PROZESSOPTIMIERUNG',
    description: 'Analyse und Optimierung Ihrer Geschäftsprozesse für mehr Effizienz und Kostenreduktion.',
    details: 'Ineffiziente Prozesse kosten Zeit und Geld. Unsere Prozessexperten analysieren Ihre bestehenden Abläufe, identifizieren Optimierungspotenziale und implementieren schlanke, effiziente Lösungen. Das Ergebnis: Kosteneinsparungen und verbesserte Produktivität.',
    benefits: ['Kosten reduzieren', 'Effizienz steigern', 'Qualität verbessern', 'Durchlaufzeiten verkürzen']
  },
  {
    icon: Handshake,
    title: 'M&A BERATUNG',
    description: 'Expertenunterstützung bei Fusionen, Übernahmen und strategischen Partnerschaften.',
    details: 'Komplexe M&A-Transaktionen erfordern umfassende Expertise und sorgfältige Planung. Wir begleiten Sie von der strategischen Planung über die Due Diligence bis hin zur erfolgreichen Integration. Unser Netzwerk und unsere Erfahrung sichern den Erfolg Ihrer Transaktion.',
    benefits: ['Zielunternehmen bewerten', 'Due Diligence durchführen', 'Verhandlungen führen', 'Integration planen']
  },
  {
    icon: GraduationCap,
    title: 'TRAINING & COACHING',
    description: 'Individuelle Weiterbildungsprogramme und Executive Coaching für Führungskräfte.',
    details: 'Investieren Sie in die Entwicklung Ihrer wertvollsten Ressource - Ihre Mitarbeiter. Unsere maßgeschneiderten Trainings und Coaching-Programme entwickeln Führungskompetenzen, stärken Teams und fördern eine Kultur der kontinuierlichen Verbesserung.',
    benefits: ['Führungskompetenzen entwickeln', 'Teams stärken', 'Performance steigern', 'Mitarbeiterzufriedenheit erhöhen']
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

        <div className="max-w-4xl mx-auto space-y-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="bg-white dark:bg-gray-900 hover:shadow-2xl hover:shadow-accent-yellow/10 transition-all duration-300 border-l-4 border-accent-yellow group"
              >
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="text-accent-yellow text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-16 w-16" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-12 h-12 bg-accent-yellow/10 rounded-full group-hover:scale-150 transition-all duration-300"></div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex-1">
                      <h3 className="font-bowlby text-2xl md:text-3xl text-gray-900 dark:text-white mb-4 group-hover:text-accent-yellow transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
                        {service.details}
                      </p>
                      
                      {/* Benefits List */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-accent-yellow rounded-full flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
