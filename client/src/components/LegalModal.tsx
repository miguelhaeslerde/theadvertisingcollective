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
      <p><strong>ADSTRONOMY GmbH</strong><br>
      Petersburgerstraße 31<br>
      10249 Berlin<br>
      Deutschland</p>
      
      <h3>Kontakt</h3>
      <p>E-Mail: luis@the-advertising-collective.de</p>
      
      <h3>Registereintrag</h3>
      <p>Eintragung im Handelsregister<br>
      Registergericht: Amtsgericht Charlottenburg<br>
      Registernummer: HRB 248064</p>
      
      <h3>Umsatzsteuer-ID</h3>
      <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br>
      DE357753177</p>
      
      <h3>Geschäftsführung</h3>
      <p>Vertretungsberechtigte Geschäftsführer: Luis Fretz</p>
      
      <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
      <p>Luis Fretz<br>
      Petersburgerstraße 31<br>
      10249 Berlin</p>
    `,
  },
  datenschutz: {
    title: 'DATENSCHUTZERKLÄRUNG',
    content: `
      <h3>Verantwortlicher</h3>
      <p><strong>ADSTRONOMY GmbH</strong><br>
      Petersburgerstraße 31<br>
      10249 Berlin<br><br>
      E-Mail: luis@the-advertising-collective.de<br>
      Registergericht: Amtsgericht Charlottenburg<br>
      Registernummer: HRB 248064<br>
      Vertretungsberechtigte Geschäftsführer: Luis Fretz<br>
      Umsatzsteuer-ID: DE357753177</p>
      
      <h3>Arten der verarbeiteten Daten</h3>
      <ul>
        <li>Bestandsdaten (z.B., Personen-Stammdaten, Namen oder Adressen)</li>
        <li>Kontaktdaten (z.B., E-Mail, Telefonnummern)</li>
        <li>Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos)</li>
        <li>Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten)</li>
        <li>Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen)</li>
      </ul>
      
      <h3>Kategorien betroffener Personen</h3>
      <p>Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die betroffenen Personen zusammenfassend auch als „Nutzer").</p>
      
      <h3>Zweck der Verarbeitung</h3>
      <ul>
        <li>Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte</li>
        <li>Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern</li>
        <li>Sicherheitsmaßnahmen</li>
        <li>Reichweitenmessung/Marketing</li>
      </ul>
      
      <h3>Verwendete Begrifflichkeiten</h3>
      <p><strong>„Personenbezogene Daten"</strong> sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.</p>
      <p><strong>„Verarbeitung"</strong> ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten.</p>
      <p><strong>„Verantwortlicher"</strong> wird die natürliche oder juristische Person bezeichnet, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>
      
      <h3>Maßgebliche Rechtsgrundlagen</h3>
      <p>Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit:</p>
      <ul>
        <li>Die Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO</li>
        <li>Die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer Leistungen und Durchführung vertraglicher Maßnahmen sowie Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO</li>
        <li>Die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO</li>
        <li>Die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten Interessen ist Art. 6 Abs. 1 lit. f DSGVO</li>
      </ul>
      
      <h3>Sicherheitsmaßnahmen</h3>
      <p>Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und Freiheiten natürlicher Personen, geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.</p>
      
      <h3>Rechte der betroffenen Personen</h3>
      <p>Sie haben das Recht:</p>
      <ul>
        <li>eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten</li>
        <li>die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen</li>
        <li>zu verlangen, dass betreffende Daten unverzüglich gelöscht werden</li>
        <li>eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen</li>
      </ul>
      
      <h3>Widerrufsrecht</h3>
      <p>Sie haben das Recht, erteilte Einwilligungen mit Wirkung für die Zukunft zu widerrufen.</p>
      
      <h3>Cookies und Widerspruchsrecht bei Direktwerbung</h3>
      <p>Als „Cookies" werden kleine Dateien bezeichnet, die auf Rechnern der Nutzer gespeichert werden. Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner gespeichert werden, werden sie gebeten die entsprechende Option in den Systemeinstellungen ihres Browsers zu deaktivieren.</p>
      
      <h3>Löschung von Daten</h3>
      <p>Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht oder in ihrer Verarbeitung eingeschränkt. Die bei uns gespeicherten Daten werden gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
      
      <h3>Geschäftsbezogene Verarbeitung</h3>
      <p>Zusätzlich verarbeiten wir Vertragsdaten (z.B., Vertragsgegenstand, Laufzeit, Kundenkategorie) und Zahlungsdaten (z.B., Bankverbindung, Zahlungshistorie) von unseren Kunden, Interessenten und Geschäftspartner zwecks Erbringung vertraglicher Leistungen, Service und Kundenpflege, Marketing, Werbung und Marktforschung.</p>
    `,
  },
  agb: {
    title: 'ALLGEMEINE GESCHÄFTSBEDINGUNGEN',
    content: `
      <h3>§ 1 Geltungsbereich</h3>
      <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der ADSTRONOMY GmbH (nachfolgend "ADSTRONOMY" genannt) und ihren Auftraggebern über die Erbringung von Beratungsleistungen.</p>
      
      <h3>§ 2 Vertragsschluss</h3>
      <p>1. Alle Angebote von ADSTRONOMY sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich bezeichnet werden.<br>
      2. Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung von ADSTRONOMY oder durch Beginn der Leistungserbringung zustande.</p>
      
      <h3>§ 3 Leistungsumfang</h3>
      <p>1. ADSTRONOMY erbringt Beratungsleistungen nach dem Stand der Technik und nach bestem Wissen und Gewissen.<br>
      2. Der konkrete Leistungsumfang ergibt sich aus der jeweiligen Auftragsbestätigung oder dem Projektvertrag.</p>
      
      <h3>§ 4 Mitwirkungspflichten des Auftraggebers</h3>
      <p>1. Der Auftraggeber stellt ADSTRONOMY alle für die Leistungserbringung erforderlichen Informationen und Unterlagen zur Verfügung.<br>
      2. Der Auftraggeber benennt einen kompetenten Ansprechpartner für die Projektdurchführung.</p>
      
      <h3>§ 5 Vergütung und Zahlungsbedingungen</h3>
      <p>1. Die Vergütung erfolgt nach Aufwand oder als Festpreis gemäß der getroffenen Vereinbarung.<br>
      2. Rechnungen sind innerhalb von 14 Tagen nach Erhalt ohne Abzug zur Zahlung fällig.</p>
      
      <h3>§ 6 Vertraulichkeit</h3>
      <p>ADSTRONOMY verpflichtet sich, alle im Rahmen der Zusammenarbeit erhaltenen Informationen vertraulich zu behandeln.</p>
      
      <h3>§ 7 Kontakt</h3>
      <p>ADSTRONOMY GmbH<br>
      Petersburgerstraße 31<br>
      10249 Berlin<br>
      E-Mail: luis@the-advertising-collective.de<br>
      Geschäftsführer: Luis Fretz</p>
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
            className="prose prose-lg max-w-none text-gray-800 dark:text-gray-200 prose-headings:text-gray-900 dark:prose-headings:text-white prose-strong:text-gray-900 dark:prose-strong:text-white"
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
