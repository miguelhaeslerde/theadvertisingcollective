import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function About() {
  const stats = [
    { value: '15+', label: 'Jahre Erfahrung' },
    { value: '500+', label: 'Erfolgreiche Projekte' },
    { value: '200+', label: 'Zufriedene Kunden' },
    { value: '25+', label: 'Experten im Team' },
  ];

  return (
    <section className="py-20 bg-main-bg dark:bg-main-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional German business team in modern office environment"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          <div>
            <h2 className="font-bowlby text-3xl md:text-4xl text-gray-900 dark:text-white mb-6">
              ÜBER THE ADVERTISING COLLECTIVE
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Seit über 15 Jahren begleiten wir Unternehmen auf ihrem Weg zu nachhaltigem Erfolg. 
              Als unabhängige Unternehmensberatung vereinen wir strategische Kompetenz mit 
              praktischer Umsetzungserfahrung.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Unser interdisziplinäres Team aus erfahrenen Beratern, Digitalexperten und 
              Branchenspezialisten entwickelt maßgeschneiderte Lösungen für Ihre individuellen 
              Herausforderungen.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-bowlby text-3xl text-accent-yellow">
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
