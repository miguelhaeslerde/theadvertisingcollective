import { Link } from 'wouter';
import { Linkedin, Twitter } from 'lucide-react';
import { SiXing } from 'react-icons/si';

export default function Footer() {
  const navigation = [
    { name: 'Agency Maxxing', href: '/agency-maxxing' },
    { name: '2025 Growth Strategy', href: '/growth-strategy' },
    { name: 'Blog', href: '/blog' },
    { name: 'Über uns', href: '/about' },
    { name: 'Kontakt', href: '/contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/tac-logo-light.png" alt="TAC Logo" className="h-6 sm:h-8 w-auto" />
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              The Advertising Collective - Ihr Partner für strategische Unternehmensberatung 
              und nachhaltige Geschäftsentwicklung.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-yellow transition-colors"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://xing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-yellow transition-colors"
              >
                <SiXing className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-yellow transition-colors"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bowlby text-base sm:text-lg mb-3 sm:mb-4">NAVIGATION</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-accent-yellow transition-colors text-sm sm:text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bowlby text-lg mb-4">KONTAKT</h4>
            <div className="space-y-3 text-gray-300">
              <p>
                Maximilianstraße 12<br />
                80539 München<br />
                Deutschland
              </p>
              <p>+49 89 123 456 78</p>
              <p>kontakt@tac-consulting.de</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} The Advertising Collective. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6 text-gray-400">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openLegalModal', { detail: 'impressum' }))}
                className="hover:text-accent-yellow transition-colors dark:text-gray-300 dark:hover:text-accent-yellow"
              >
                Impressum
              </button>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openLegalModal', { detail: 'datenschutz' }))}
                className="hover:text-accent-yellow transition-colors dark:text-gray-300 dark:hover:text-accent-yellow"
              >
                Datenschutz
              </button>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openLegalModal', { detail: 'agb' }))}
                className="hover:text-accent-yellow transition-colors dark:text-gray-300 dark:hover:text-accent-yellow"
              >
                AGB
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
