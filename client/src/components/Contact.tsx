export default function Contact() {
  return (
    <section className="py-24 bg-brightest dark:bg-gray-800 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_rgba(255,236,65,0.1)_0%,_transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(255,236,65,0.08)_0%,_transparent_50%)] animate-float"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-20">
          <h2 className="font-bowlby text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6 leading-tight">
            KONTAKT
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Buchen Sie jetzt Ihr kostenloses Strategiegespräch und lassen Sie uns gemeinsam analysieren, 
            wie Sie endlich unter die TOP 3 Ihrer Branche kommen.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-accent-yellow rounded-full animate-expand-glow"></div>
          </div>
        </div>

        {/* Calendly Embed */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-accent-yellow/20">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/theadvertisingcollective/strategiegespraech"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
          <script 
            type="text/javascript" 
            src="https://assets.calendly.com/assets/external/widget.js" 
            async
          ></script>
        </div>

        {/* Contact Information Below Calendar */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-accent-yellow/20">
              <h3 className="font-bowlby text-xl text-gray-900 dark:text-white mb-2">E-MAIL</h3>
              <p className="text-gray-600 dark:text-gray-300">luis@the-advertising-collective.de</p>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-accent-yellow/20">
              <h3 className="font-bowlby text-xl text-gray-900 dark:text-white mb-2">ADRESSE</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Petersburgerstraße 31<br />
                10249 Berlin
              </p>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-accent-yellow/20">
              <h3 className="font-bowlby text-xl text-gray-900 dark:text-white mb-2">UNTERNEHMEN</h3>
              <p className="text-gray-600 dark:text-gray-300">ADSTRONOMY GmbH</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}