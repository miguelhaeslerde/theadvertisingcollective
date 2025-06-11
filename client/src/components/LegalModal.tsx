import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface LegalContent {
  title: string;
  content: string;
}

const legalContent: Record<string, LegalContent> = {
  impressum: {
    title: 'IMPRESSUM',
    content: `
      <h3>Angaben gemäß § 5 TMG</h3>
      <p><strong>The Advertising Collective GmbH</strong><br>
      Maximilianstraße 12<br>
      80539 München<br>
      Deutschland</p>
      
      <h3>Kontakt</h3>
      <p>Telefon: +49 89 123 456 78<br>
      E-Mail: kontakt@tac-consulting.de</p>
      
      <h3>Registereintrag</h3>
      <p>Eintragung im Handelsregister<br>
      Registergericht: Amtsgericht München<br>
      Registernummer: HRB 123456</p>
      
      <h3>Umsatzsteuer-ID</h3>
      <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br>
      DE123456789</p>
      
      <h3>Geschäftsführung</h3>
      <p>Max Mustermann, Maria Musterfrau</p>
      
      <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
      <p>Max Mustermann<br>
      Maximilianstraße 12<br>
      80539 München</p>
    `,
  },
  datenschutz: {
    title: 'DATENSCHUTZERKLÄRUNG',
    content: `
      <h3>1. Datenschutz auf einen Blick</h3>
      <h4>Allgemeine Hinweise</h4>
      <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
      
      <h4>Datenerfassung auf dieser Website</h4>
      <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
      <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
      
      <h3>2. Hosting und Content Delivery Networks (CDN)</h3>
      <h4>Externes Hosting</h4>
      <p>Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.</p>
      
      <h3>3. Allgemeine Hinweise und Pflichtinformationen</h3>
      <h4>Datenschutz</h4>
      <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.</p>
      
      <h4>Hinweis zur verantwortlichen Stelle</h4>
      <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br>
      The Advertising Collective GmbH<br>
      Maximilianstraße 12<br>
      80539 München<br>
      Deutschland<br>
      Telefon: +49 89 123 456 78<br>
      E-Mail: kontakt@tac-consulting.de</p>
    `,
  },
  agb: {
    title: 'ALLGEMEINE GESCHÄFTSBEDINGUNGEN',
    content: `
      <h3>§ 1 Geltungsbereich</h3>
      <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der The Advertising Collective GmbH (nachfolgend "TAC" genannt) und ihren Auftraggebern über die Erbringung von Beratungsleistungen.</p>
      
      <h3>§ 2 Vertragsschluss</h3>
      <p>1. Alle Angebote von TAC sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich bezeichnet werden.<br>
      2. Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung von TAC oder durch Beginn der Leistungserbringung zustande.</p>
      
      <h3>§ 3 Leistungsumfang</h3>
      <p>1. TAC erbringt Beratungsleistungen nach dem Stand der Technik und nach bestem Wissen und Gewissen.<br>
      2. Der konkrete Leistungsumfang ergibt sich aus der jeweiligen Auftragsbestätigung oder dem Projektvertrag.</p>
      
      <h3>§ 4 Mitwirkungspflichten des Auftraggebers</h3>
      <p>1. Der Auftraggeber stellt TAC alle für die Leistungserbringung erforderlichen Informationen und Unterlagen zur Verfügung.<br>
      2. Der Auftraggeber benennt einen kompetenten Ansprechpartner für die Projektdurchführung.</p>
      
      <h3>§ 5 Vergütung und Zahlungsbedingungen</h3>
      <p>1. Die Vergütung erfolgt nach Aufwand oder als Festpreis gemäß der getroffenen Vereinbarung.<br>
      2. Rechnungen sind innerhalb von 14 Tagen nach Erhalt ohne Abzug zur Zahlung fällig.</p>
      
      <h3>§ 6 Vertraulichkeit</h3>
      <p>TAC verpflichtet sich, alle im Rahmen der Zusammenarbeit erhaltenen Informationen vertraulich zu behandeln.</p>
    `,
  },
};

export default function LegalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeContent, setActiveContent] = useState<string | null>(null);

  useEffect(() => {
    const handleOpenModal = (event: CustomEvent) => {
      const contentType = event.detail;
      if (legalContent[contentType]) {
        setActiveContent(contentType);
        setIsOpen(true);
      }
    };

    window.addEventListener('openLegalModal', handleOpenModal as EventListener);
    
    return () => {
      window.removeEventListener('openLegalModal', handleOpenModal as EventListener);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setActiveContent(null);
  };

  const content = activeContent ? legalContent[activeContent] : null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-bowlby text-2xl">
            {content?.title}
          </DialogTitle>
        </DialogHeader>
        
        {content && (
          <div 
            className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        )}
        
        <div className="flex justify-end mt-6">
          <Button onClick={handleClose} variant="outline">
            Schließen
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
