import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function CTA() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-bowlby text-3xl md:text-4xl text-white mb-6">
          BEREIT FÜR DEN NÄCHSTEN SCHRITT?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Lassen Sie uns gemeinsam Ihre Herausforderungen analysieren und 
          maßgeschneiderte Lösungen für Ihr Unternehmen entwickeln.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button className="bg-accent-yellow hover:bg-yellow-300 text-gray-900 font-bold py-4 px-8">
              KOSTENLOSE ERSTBERATUNG
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8"
            >
              KONTAKT AUFNEHMEN
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
