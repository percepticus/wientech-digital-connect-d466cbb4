
import { Building, MapPin, Mail, Phone, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface ImpressumPageProps {
  translations: any;
}

export const ImpressumPage = ({ translations }: ImpressumPageProps) => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {translations.impressum.title}
          </h1>
        </div>

        <div className="space-y-8">
          {/* Company Information */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Building className="w-6 h-6 text-red-500" />
                <span>{translations.impressum.company}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Firmenname</h3>
                  <p className="text-gray-600">WIENTech</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Website</h3>
                  <p className="text-gray-600">wientech.at</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Address */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="w-6 h-6 text-red-500" />
                <span>{translations.impressum.address}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-600">
                <p>Wien, 1040 Bezirk</p>
                <p>Theresianumgasse 7/2/7</p>
                <p>Mobil</p>
                <p>Österreich</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="w-6 h-6 text-red-500" />
                <span>{translations.impressum.contact}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span className="text-gray-600">velko.spasov@wientech.at</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500" />
                <span className="text-gray-600">+43 664 5162910</span>
              </div>
            </CardContent>
          </Card>

          {/* Responsibility */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-6 h-6 text-red-500" />
                <span>{translations.impressum.responsibility}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Velko Spasov</p>
              <p className="text-gray-600">velko.spasov@wientech.at</p>
            </CardContent>
          </Card>

          {/* Disclaimer - Now as Accordion */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">
                {translations.impressum.disclaimer}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-4">
                {translations.impressum.disclaimerText}
              </p>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="content-liability">
                  <AccordionTrigger className="text-left font-semibold text-gray-900">
                    {translations.impressum.contentLiability}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 text-sm">
                      {translations.impressum.contentLiabilityText}
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="links-liability">
                  <AccordionTrigger className="text-left font-semibold text-gray-900">
                    {translations.impressum.linksLiability}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 text-sm">
                      {translations.impressum.linksLiabilityText}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
