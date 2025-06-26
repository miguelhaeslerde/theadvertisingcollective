import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Users, Target, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Ergebnisorientiert',
    description: 'Wir fokussieren uns auf messbare Ergebnisse und nachhaltigen Erfolg für unsere Kunden.',
  },
  {
    icon: Lightbulb,
    title: 'Innovativ',
    description: 'Wir bringen frische Perspektiven und innovative Lösungsansätze in jedes Projekt ein.',
  },
  {
    icon: Users,
    title: 'Partnerschaftlich',
    description: 'Wir arbeiten eng mit unseren Kunden zusammen und verstehen uns als langfristige Partner.',
  },
  {
    icon: Award,
    title: 'Qualitätsorientiert',
    description: 'Höchste Qualitätsstandards und kontinuierliche Weiterentwicklung prägen unser Handeln.',
  },
];

const team = [
  {
    name: 'Dr. Max Mustermann',
    role: 'Managing Partner',
    description: 'Über 20 Jahre Erfahrung in der Strategieberatung und Unternehmensführung.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=400&h=400&fit=crop',
  },
  {
    name: 'Maria Musterfrau',
    role: 'Senior Partner',
    description: 'Expertin für digitale Transformation und Change Management mit internationaler Erfahrung.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b332c1ad?ixlib=rb-4.0.3&w=400&h=400&fit=crop',
  },
  {
    name: 'Thomas Weber',
    role: 'Partner',
    description: 'Spezialist für Prozessoptimierung und operative Exzellenz in mittelständischen Unternehmen.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=400&h=400&fit=crop',
  },
  {
    name: 'Julia Schmidt',
    role: 'Senior Consultant',
    description: 'Fokus auf M&A Beratung und Unternehmensentwicklung mit Expertise im Technologiesektor.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&w=400&h=400&fit=crop',
  },
];

const stats = [
  { value: '15+', label: 'Jahre Erfahrung' },
  { value: '500+', label: 'Erfolgreiche Projekte' },
  { value: '200+', label: 'Zufriedene Kunden' },
  { value: '25+', label: 'Experten im Team' },
];

export default function About() {
  return (
    <Layout
      title="Über uns - The Advertising Collective"
      description="Lernen Sie The Advertising Collective kennen - Ihr Partner für strategische Unternehmensberatung mit über 15 Jahren Erfahrung und 500+ erfolgreichen Projekten."
    >
      {/* Hero Section */}
      <section className="bg-main-bg dark:bg-main-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bowlby text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
            ÜBER <span className="text-accent-yellow">THE ADVERTISING COLLECTIVE</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Seit über 15 Jahren begleiten wir Unternehmen auf ihrem Weg zu nachhaltigem Erfolg. 
            Als unabhängige Unternehmensberatung vereinen wir strategische Kompetenz mit praktischer Umsetzungserfahrung.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brightest dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-bowlby text-4xl md:text-5xl text-accent-yellow mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-main-bg dark:bg-main-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bowlby text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">
              UNSERE WERTE
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Diese Grundsätze leiten unser Handeln und prägen unsere Zusammenarbeit mit Kunden und Partnern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-brightest dark:bg-gray-800 text-center">
                  <CardContent className="p-8">
                    <div className="text-accent-yellow text-4xl mb-4 flex justify-center">
                      <IconComponent className="h-10 w-10" />
                    </div>
                    <h3 className="font-bowlby text-xl text-gray-900 dark:text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-brightest dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bowlby text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">
              UNSER TEAM
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Lernen Sie die Experten kennen, die mit Leidenschaft und Expertise 
              Ihre Herausforderungen zu unserem Antrieb machen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-main-bg dark:bg-main-dark text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bowlby text-lg text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent-yellow font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-main-bg dark:bg-main-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bowlby text-3xl md:text-4xl text-gray-900 dark:text-white mb-6">
                UNSERE GESCHICHTE
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bowlby text-xl text-accent-yellow mb-2">2009 - GRÜNDUNG</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    The Advertising Collective wird als unabhängige Beratung mit dem Fokus auf 
                    strategische Unternehmensberatung gegründet.
                  </p>
                </div>
                <div>
                  <h3 className="font-bowlby text-xl text-accent-yellow mb-2">2015 - EXPANSION</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Erweiterung des Leistungsportfolios um digitale Transformation und 
                    Change Management. Erste internationale Projekte.
                  </p>
                </div>
                <div>
                  <h3 className="font-bowlby text-xl text-accent-yellow mb-2">2020 - DIGITALISIERUNG</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Verstärkung der Digitalisierungsberatung und Entwicklung innovativer 
                    Remote-Consulting-Formate während der Pandemie.
                  </p>
                </div>
                <div>
                  <h3 className="font-bowlby text-xl text-accent-yellow mb-2">2024 - HEUTE</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Über 500 erfolgreich abgeschlossene Projekte und ein Team von 25+ Experten 
                    verschiedener Fachrichtungen.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Modern office building representing company growth"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bowlby text-3xl md:text-4xl text-white mb-6">
            WERDEN SIE TEIL UNSERER ERFOLGSGESCHICHTE
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Herausforderungen meistern und 
            neue Wachstumschancen für Ihr Unternehmen erschließen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-accent-yellow hover:bg-yellow-300 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors"
            >
              JETZT KONTAKT AUFNEHMEN
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors"
            >
              UNSERE LEISTUNGEN
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
