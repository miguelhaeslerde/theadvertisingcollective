import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-accent-yellow/30 p-4 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="h-6 w-6 text-accent-yellow mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bowlby text-lg text-white mb-2">Cookie-Einstellungen</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern und anonyme Nutzungsstatistiken zu erstellen. 
                Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß unserer{' '}
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('openLegalModal', { detail: 'datenschutz' }))}
                  className="text-accent-yellow hover:underline"
                >
                  Datenschutzerklärung
                </button>{' '}
                zu.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              onClick={rejectCookies}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Ablehnen
            </Button>
            <Button
              onClick={acceptCookies}
              className="bg-accent-yellow hover:bg-accent-yellow/90 text-gray-900 font-bold"
            >
              Alle akzeptieren
            </Button>
            <button
              onClick={rejectCookies}
              className="text-gray-400 hover:text-white p-1 ml-2"
              aria-label="Banner schließen"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}