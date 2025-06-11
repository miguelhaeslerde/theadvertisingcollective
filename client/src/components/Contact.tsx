import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { insertContactSchema } from '@shared/schema';

const contactFormSchema = insertContactSchema.extend({
  service: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const services = [
  'Strategieberatung',
  'Digitale Transformation',
  'Change Management',
  'Prozessoptimierung',
  'M&A Beratung',
  'Training & Coaching',
];

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      service: '',
      message: '',
      privacyAccepted: false,
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest('POST', '/api/contacts', data);
    },
    onSuccess: () => {
      toast({
        title: 'Nachricht gesendet',
        description: 'Vielen Dank für Ihre Nachricht! Wir melden uns schnellstmöglich bei Ihnen.',
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
    },
    onError: (error: Error) => {
      toast({
        title: 'Fehler beim Senden',
        description: error.message || 'Bitte versuchen Sie es später erneut.',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: ['Maximilianstraße 12', '80539 München', 'Deutschland'],
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: ['+49 89 123 456 78'],
    },
    {
      icon: Mail,
      title: 'E-Mail',
      content: ['kontakt@tac-consulting.de'],
    },
    {
      icon: Clock,
      title: 'Öffnungszeiten',
      content: ['Mo - Fr: 9:00 - 18:00 Uhr', 'Sa: 10:00 - 14:00 Uhr'],
    },
  ];

  return (
    <section className="py-20 bg-main-bg dark:bg-main-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bowlby text-3xl md:text-4xl text-gray-900 dark:text-white mb-4">
            KONTAKT
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nehmen Sie Kontakt mit uns auf - wir freuen uns auf Ihre Anfrage und 
            beraten Sie gerne zu Ihren individuellen Herausforderungen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h3 className="font-bowlby text-2xl text-gray-900 dark:text-white mb-6">
                SCHREIBEN SIE UNS
              </h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vorname *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nachname *</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-Mail-Adresse *</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Unternehmen</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interessiert an</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Bitte wählen..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nachricht *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Beschreiben Sie Ihre Herausforderung oder Ihr Projekt..."
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="privacyAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm">
                            Ich stimme der{' '}
                            <button
                              type="button"
                              onClick={() => window.dispatchEvent(new CustomEvent('openLegalModal', { detail: 'datenschutz' }))}
                              className="text-accent-yellow hover:underline"
                            >
                              Datenschutzerklärung
                            </button>
                            {' '}zu und bin einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage gespeichert werden. *
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-accent-yellow hover:bg-yellow-300 text-gray-900 font-bold py-4 px-8"
                  >
                    {contactMutation.isPending ? 'WIRD GESENDET...' : 'NACHRICHT SENDEN'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div>
            <h3 className="font-bowlby text-2xl text-gray-900 dark:text-white mb-6">
              KONTAKTDATEN
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-accent-yellow text-xl mt-1">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                        {info.title}
                      </h4>
                      {info.content.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-gray-600 dark:text-gray-300">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
                alt="Modern German business office interior with professional design"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
