export default function CustomerLogos() {
  // Using popular German/European company logos that would be realistic for an agency
  const customerLogos = [
    { name: 'SAP', url: 'https://logos-world.net/wp-content/uploads/2020/09/SAP-Logo.png' },
    { name: 'Siemens', url: 'https://logos-world.net/wp-content/uploads/2020/06/Siemens-Logo.png' },
    { name: 'BMW', url: 'https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png' },
    { name: 'Mercedes', url: 'https://logos-world.net/wp-content/uploads/2020/04/Mercedes-Logo.png' },
    { name: 'Volkswagen', url: 'https://logos-world.net/wp-content/uploads/2020/04/Volkswagen-Logo.png' },
    { name: 'Bosch', url: 'https://logos-world.net/wp-content/uploads/2020/12/Bosch-Logo.png' },
    { name: 'Adidas', url: 'https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png' },
    { name: 'Bayer', url: 'https://logos-world.net/wp-content/uploads/2021/02/Bayer-Logo.png' },
  ];

  return (
    <section className="py-16 bg-gray-900 transform -skew-y-1 relative overflow-hidden">
      <div className="transform skew-y-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bowlby text-2xl md:text-3xl text-white text-center mb-12">
            UNSERE KUNDEN
          </h3>
          
          {/* Animated Logo Marquee */}
          <div className="relative">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex space-x-12 min-w-full justify-around items-center">
                {customerLogos.map((logo, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 h-16 w-32 flex items-center justify-center bg-white rounded-lg p-4 opacity-80 hover:opacity-100 transition-opacity"
                  >
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                ))}
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-12 min-w-full justify-around items-center">
                {customerLogos.map((logo, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 h-16 w-32 flex items-center justify-center bg-white rounded-lg p-4 opacity-80 hover:opacity-100 transition-opacity"
                  >
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}