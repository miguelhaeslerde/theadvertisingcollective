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
    <section className="py-16 pb-20 bg-main-bg dark:bg-main-dark relative overflow-hidden">
      {/* Title above the diagonal section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h3 className="font-bowlby text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white text-center leading-tight">
          UNSERE KUNDEN
        </h3>
        <div className="mt-8 flex justify-center">
          <div className="w-32 h-1 bg-accent-yellow rounded-full animate-expand-glow"></div>
        </div>
      </div>
      

    </section>
  );
}