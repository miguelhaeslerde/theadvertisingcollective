import { Linkedin, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Luis Fretz',
    role: 'CEO & Gründer',
    description: 'Strategieexperte mit über 10 Jahren Erfahrung in der Unternehmensberatung. Spezialisiert auf digitale Transformation und nachhaltige Geschäftsentwicklung.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    linkedin: '#',
    email: 'luis@theadvertisingcollective.de'
  },
  {
    name: 'Till Klemt',
    role: 'CMO & Co-Gründer',
    description: 'Marketing- und Kommunikationsexperte mit umfassender Erfahrung in der strategischen Markenführung und digitalen Marketingkonzepten.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    linkedin: '#',
    email: 'till@theadvertisingcollective.de'
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
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
        <div className="text-center mb-20">
          <h2 className="font-bowlby text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            UNSER TEAM
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Die Köpfe hinter The Advertising Collective - 
            Expertise, Leidenschaft und Vision für Ihren Erfolg.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-accent-yellow rounded-full animate-expand-glow"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 border border-accent-yellow/30 group"
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-accent-yellow/50 group-hover:border-accent-yellow transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -top-2 -right-8 w-6 h-6 bg-accent-yellow rounded-full animate-ping"></div>
                </div>
                
                <h3 className="font-bowlby text-2xl text-white mb-2 group-hover:text-accent-yellow transition-colors">
                  {member.name}
                </h3>
                
                <div className="text-accent-yellow font-bold text-lg mb-4">
                  {member.role}
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {member.description}
                </p>
                
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-accent-yellow transition-colors p-2 rounded-full hover:bg-accent-yellow/10"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-accent-yellow transition-colors p-2 rounded-full hover:bg-accent-yellow/10"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}