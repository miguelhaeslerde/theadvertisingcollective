import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import CustomerLogos from '@/components/CustomerLogos';
import Services from '@/components/Services';
import Team from '@/components/Team';
import About from '@/components/About';
import LatestBlogPosts from '@/components/LatestBlogPosts';
import Contact from '@/components/Contact';
import InteractiveGlobe from '@/components/InteractiveGlobe';
import { DraggableCarousel } from '@/components/DraggableCarousel';

// Top Provider Section Component
function TopProviderSection() {
  return (
    <section className="pt-20 py-20 bg-brightest dark:bg-gray-900 overflow-hidden relative z-10" style={{marginTop: '-2rem'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-bowlby text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 dark:text-white leading-tight animate-fade-in-up">
              Du bist unter den{' '}
              <span className="text-accent-yellow bg-gray-900 dark:bg-accent-yellow dark:text-gray-900 px-3 py-2 rounded-lg inline-block animate-pulse-glow transform hover:scale-110 transition-all duration-300">
                TOP 10
              </span>{' '}
              Anbietern deines Marktes?
            </h2>
            <div className="mt-8 flex justify-start">
              <div className="w-24 h-1 bg-accent-yellow rounded-full animate-expand"></div>
            </div>

          </div>
          
          {/* Interactive 3D Globe */}
          <div className="order-1 lg:order-2">
            <InteractiveGlobe />
          </div>
          
          {/* Floating elements animation */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-accent-yellow opacity-10 rounded-full animate-float"></div>
          <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-accent-yellow opacity-20 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 -left-20 w-12 h-12 bg-accent-yellow opacity-15 rounded-full animate-bounce-slow"></div>
        </div>
      </div>
    </section>
  );
}

// Top Three Section Component
function TopThreeSection() {
  return (
    <section className="pt-20 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-gray-800 relative overflow-hidden" style={{marginTop: '-2rem'}}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_rgba(255,236,65,0.2)_0%,_transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(255,236,65,0.15)_0%,_transparent_50%)] animate-float"></div>
        <div className="absolute bottom-0 left-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_100%,_rgba(255,236,65,0.1)_0%,_transparent_50%)] animate-float-delayed"></div>
      </div>
      
      {/* Moving Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(255,255,255,0.1)_25px,rgba(255,255,255,0.1)_26px,transparent_27px,transparent_74px,rgba(255,255,255,0.1)_75px,rgba(255,255,255,0.1)_76px,transparent_77px),linear-gradient(transparent_24px,rgba(255,255,255,0.1)_25px,rgba(255,255,255,0.1)_26px,transparent_27px,transparent_74px,rgba(255,255,255,0.1)_75px,rgba(255,255,255,0.1)_76px,transparent_77px)] bg-[size:100px_100px] animate-grid-move"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center">
          <h2 className="font-bowlby text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-8 relative">
            Du versuchst seit Jahren vergeblich unter die
          </h2>
          
          {/* TOP 3 as separate prominent line */}
          <div className="relative mb-8">
            <div className="relative inline-block">
              <span className="relative z-10 font-bowlby text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black text-accent-yellow drop-shadow-2xl">
                TOP 3
              </span>
              {/* Yellow glow effect - more subtle and readable */}
              <div className="absolute inset-0 text-accent-yellow font-bowlby text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black blur-sm opacity-30 animate-pulse-slow"></div>
              
              {/* Power indicators in brand colors */}
              <div className="absolute -top-6 -right-6 w-4 h-4 bg-accent-yellow rounded-full animate-ping"></div>
              <div className="absolute -bottom-6 -left-6 w-3 h-3 bg-accent-yellow rounded-full animate-ping animation-delay-200"></div>
              <div className="absolute -top-3 -left-9 w-2 h-2 bg-accent-yellow rounded-full animate-ping animation-delay-400"></div>
            </div>
          </div>
          
          <h3 className="font-bowlby text-4xl md:text-6xl lg:text-7xl text-white leading-tight relative">
            zu kommen?
          </h3>
          
          <div className="mt-12 flex justify-center">
            <div className="w-32 h-1 bg-accent-yellow rounded-full animate-expand-glow"></div>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-accent-yellow rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-accent-yellow rounded-full animate-float-delayed opacity-40"></div>
      <div className="absolute bottom-32 left-16 w-2 h-2 bg-accent-yellow rounded-full animate-bounce-slow opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-accent-yellow rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-60 left-1/3 w-2 h-2 bg-accent-yellow rounded-full animate-float opacity-30"></div>
      <div className="absolute top-80 right-1/4 w-3 h-3 bg-accent-yellow rounded-full animate-bounce-slow opacity-40"></div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="relative">
        <CustomerLogos />
        
        {/* Diagonal Divider with Customer Logos - Between UNSERE KUNDEN and TOP 10 */}
        <div className="absolute -bottom-4 -left-12 -right-12 bg-accent-yellow transform -skew-y-1 py-4 overflow-hidden z-[150] h-16">
          <div className="relative">
            {/* Draggable Customer Logos */}
            <div 
              className="flex cursor-grab active:cursor-grabbing select-none"
              style={{
                overflowX: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
              onMouseDown={(e: React.MouseEvent) => {
                const container = e.currentTarget;
                const startX = e.pageX - container.offsetLeft;
                const scrollLeft = container.scrollLeft;
                
                const handleMouseMove = (e: MouseEvent) => {
                  const x = e.pageX - container.offsetLeft;
                  const walk = (x - startX) * 2;
                  container.scrollLeft = scrollLeft - walk;
                };
                
                const handleMouseUp = () => {
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };
                
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
            >
              {/* Extended set of customer logos for infinite effect */}
              {Array.from({ length: 50 }).map((_, index) => {
                const logos = ['SAP', 'BMW', 'Siemens', 'Mercedes', 'VW', 'Bosch', 'Adidas', 'Bayer'];
                const logo = logos[index % logos.length];
                return (
                  <div key={`customer-logo-${index}`} className="flex-shrink-0 mx-6 flex items-center justify-center">
                    <div className="h-8 w-20 bg-white rounded-md flex items-center justify-center shadow-sm">
                      <span className="text-gray-800 text-xs font-bold">{logo}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <TopProviderSection />
        
        {/* Diagonal Divider - Between TOP 10 and TOP 3 */}
        <div className="absolute -bottom-4 -left-12 -right-12 bg-accent-yellow transform skew-y-1 py-4 overflow-hidden z-[150] h-16">
          <div className="relative">
            {/* Draggable TAC Text following diagonal angle */}
            <div 
              className="flex cursor-grab active:cursor-grabbing select-none"
              style={{
                overflowX: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
              onMouseDown={(e: React.MouseEvent) => {
                const container = e.currentTarget as HTMLElement;
                const startX = e.pageX - container.offsetLeft;
                const scrollLeft = container.scrollLeft;
                
                const handleMouseMove = (e: MouseEvent) => {
                  const x = e.pageX - container.offsetLeft;
                  const walk = (x - startX) * 2;
                  container.scrollLeft = scrollLeft - walk;
                };
                
                const handleMouseUp = () => {
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };
                
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
            >
              {/* Extended continuous line of TAC text */}
              {[...Array(100)].map((_, index) => (
                <span key={`tac-${index}`} className="font-bowlby text-lg md:text-xl lg:text-2xl text-gray-900 font-black tracking-wide flex-shrink-0 mr-6">
                  TAC
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <TopThreeSection />
        
        {/* Diagonal Divider - Between TOP 3 and Services (mirrored direction) */}
        <div className="absolute -bottom-4 -left-12 -right-12 bg-accent-yellow transform -skew-y-1 py-4 overflow-hidden z-[150] h-16">
          <div className="relative">
            {/* Draggable TAC Text following diagonal angle */}
            <div 
              className="flex cursor-grab active:cursor-grabbing select-none"
              style={{
                overflowX: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
              onMouseDown={(e: React.MouseEvent) => {
                const container = e.currentTarget;
                const startX = e.pageX - container.offsetLeft;
                const scrollLeft = container.scrollLeft;
                
                const handleMouseMove = (e: MouseEvent) => {
                  const x = e.pageX - container.offsetLeft;
                  const walk = (x - startX) * 2;
                  container.scrollLeft = scrollLeft - walk;
                };
                
                const handleMouseUp = () => {
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };
                
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
            >
              {/* Extended continuous line of TAC text */}
              {[...Array(100)].map((_, index) => (
                <span key={`tac-services-${index}`} className="font-bowlby text-lg md:text-xl lg:text-2xl text-gray-900 font-black tracking-wide flex-shrink-0 mr-6">
                  TAC
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Services />
      <Team />
      <About />
      <LatestBlogPosts />
      <Contact />
    </Layout>
  );
}