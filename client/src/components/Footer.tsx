import { Link } from 'wouter';
import { Linkedin, Twitter } from 'lucide-react';
import { SiXing } from 'react-icons/si';
import { useTheme } from '@/contexts/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  const navigation = [
    { name: 'Agency Maxxing', href: '/agency-maxxing' },
    { name: '2025 Growth Strategy', href: '/growth-strategy' },
    { name: 'Blog', href: '/blog' },
    { name: 'Über uns', href: '/about' },
    { name: 'Kontakt', href: '/contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src={theme === 'dark' ? '/tac-logo-light.png' : '/tac-logo-dark.png'} 
                alt="TAC Logo" 
                className="h-10 w-auto" 
              />
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-sm">
              The Advertising Collective - Ihr Partner für strategische Unternehmensberatung 
              und nachhaltige Geschäftsentwicklung.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-accent-yellow transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://xing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-accent-yellow transition-colors"
              >
                <SiXing className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-accent-yellow transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bowlby text-lg mb-6 text-gray-900 dark:text-white">NAVIGATION</h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-accent-yellow transition-colors text-sm leading-relaxed"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bowlby text-lg mb-6 text-gray-900 dark:text-white">KONTAKT</h4>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-sm">
              <div className="leading-relaxed">
                ADSTRONOMY GmbH<br />
                Petersburgerstraße 31<br />
                10249 Berlin<br />
                Deutschland
              </div>
              <div>luis@the-advertising-collective.de</div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-10 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 dark:text-gray-400 mb-6 md:mb-0 text-sm">
              © {currentYear} The Advertising Collective. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-8 text-gray-600 dark:text-gray-400 text-sm">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openLegalModal', { detail: 'impressum' }))}
                className="hover:text-accent-yellow transition-colors"
              >
                Impressum
              </button>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openLegalModal', { detail: 'datenschutz' }))}
                className="hover:text-accent-yellow transition-colors"
              >
                Datenschutz
              </button>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openLegalModal', { detail: 'agb' }))}
                className="hover:text-accent-yellow transition-colors"
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
