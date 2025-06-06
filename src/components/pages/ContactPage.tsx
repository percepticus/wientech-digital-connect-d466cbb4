
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ContactPageProps {
  translations: any;
}

export const ContactPage = ({ translations }: ContactPageProps) => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 break-words">
            {translations.contact.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-red-100 p-3 sm:p-4 rounded-full flex-shrink-0">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">
                      {translations.contact.info.email}
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg break-all">
                      velko.spasov@wientech.at
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-red-100 p-3 sm:p-4 rounded-full flex-shrink-0">
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">
                      {translations.contact.info.phone}
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg">
                      +43 664 355 9835
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-red-100 p-3 sm:p-4 rounded-full flex-shrink-0">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">
                      {translations.contact.address}
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                      Wien, 1040 Bezirk<br />
                      Theresianumgasse 7/2/7<br />
                      Mobil
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 break-words">
                {translations.contact.cta.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                {translations.contact.cta.description}
              </p>
            </div>

            <div className="space-y-4">
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold"
                onClick={() => window.open('https://wa.me/436643559835', '_blank')}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="break-words">{translations.contact.cta.whatsapp}</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-3 sm:py-4 text-base sm:text-lg font-semibold"
                onClick={() => window.open('tel:+436643559835')}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="break-words">{translations.contact.cta.call}</span>
              </Button>

              <Button 
                variant="outline" 
                className="w-full border-gray-400 text-gray-700 hover:bg-gray-100 py-3 sm:py-4 text-base sm:text-lg font-semibold"
                onClick={() => window.open('mailto:velko.spasov@wientech.at')}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                <span className="break-words">{translations.contact.cta.email}</span>
              </Button>
            </div>

            <div className="bg-gradient-to-br from-[#464646] to-gray-800 p-6 sm:p-8 rounded-lg text-white text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-4 break-words">
                {translations.contact.cta.experienceTitle}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {translations.contact.cta.experienceDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
