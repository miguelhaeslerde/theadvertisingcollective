import { useState } from 'react';
import { X } from 'lucide-react';

export default function MaintenanceOverlay() {
  const [isVisible, setIsVisible] = useState(true);

  const handleLegalClick = (type: string) => {
    // Dispatch custom event to open legal modal
    window.dispatchEvent(new CustomEvent('openLegalModal', { 
      detail: type 
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-md w-full p-8 text-center relative">
        {/* Close button for internal use */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 opacity-20 hover:opacity-100 transition-opacity"
          aria-label="Schließen"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#FFEC41] font-[Bowlby One SC]">
            TAC
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            The Advertising Collective
          </p>
        </div>

        {/* Maintenance message */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-[Bowlby One SC]">
            Website im Aufbau
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Unsere neue Website ist derzeit noch in Entwicklung. 
            Für rechtliche Informationen stehen Ihnen bereits 
            die folgenden Seiten zur Verfügung:
          </p>
        </div>

        {/* Legal links */}
        <div className="space-y-3">
          <button
            onClick={() => handleLegalClick('impressum')}
            className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors text-sm font-medium"
          >
            Impressum
          </button>
          <button
            onClick={() => handleLegalClick('datenschutz')}
            className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors text-sm font-medium"
          >
            Datenschutz
          </button>
          <button
            onClick={() => handleLegalClick('agb')}
            className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors text-sm font-medium"
          >
            AGB
          </button>
        </div>

        {/* Contact info */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Bei Fragen: <br />
            <a 
              href="mailto:luis@the-advertising-collective.de" 
              className="text-[#FFEC41] hover:underline"
            >
              luis@the-advertising-collective.de
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}