import { Users, Award, Globe, Target, CheckCircle, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface AboutPageProps {
  translations: any;
}

export const AboutPage = ({ translations }: AboutPageProps) => {
  const stats = [
    { number: '10+', label: translations.about.stats.years },
    { number: '30+', label: translations.about.stats.projects },
    { number: '30+', label: translations.about.stats.clients },
    { number: '5★', label: translations.about.stats.rating }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: translations.about.values.precision,
      description: translations.about.values.precisionDesc
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-red-500" />,
      title: translations.about.values.quality,
      description: translations.about.values.qualityDesc
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-red-500" />,
      title: translations.about.values.innovation,
      description: translations.about.values.innovationDesc
    }
  ];

  const notableProjects = [
    {
      client: 'Deutsche Bahn AG',
      logo: '/lovable-uploads/8f0052da-fcdb-44c5-9608-6f2984a9848a.png',
      description: translations.about.projects.deutscheBahn
    },
    {
      client: 'Alois Müller GmbH & Co. KG',
      logo: '/lovable-uploads/c821dbc3-9578-467c-9594-5261454904c5.png',
      description: translations.about.projects.mueller
    },
    {
      client: '',
      logo: '/lovable-uploads/de3fdcc1-b4e2-4b58-89c3-0e5ca61a5fc7.png',
      description: translations.about.projects.commnex
    },
    {
      client: 'Ideal Alpha GmbH',
      logo: '/lovable-uploads/12a1c2dc-fde7-4e81-a849-37d532060d4d.png',
      description: translations.about.projects.idealAlpha
    }
  ];

  const clientLogos = [
    { src: '/lovable-uploads/2ac080b2-e1d0-4543-854d-d16da034bddf.png', className: 'max-h-8' }, // KfW - made 30% smaller
    { src: '/lovable-uploads/b10bbf74-8a9a-4a09-a0e5-320afb2a279a.png', className: 'max-h-12' }, // Deutsche Bahn
    { src: '/lovable-uploads/a5a17c44-d84b-46df-93ac-efe81b033ab1.png', className: 'max-h-10' }, // MSG
    { src: '/lovable-uploads/c821dbc3-9578-467c-9594-5261454904c5.png', className: 'max-h-10' } // Müller
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#464646] to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">{translations.about.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              {translations.about.subtitle}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notable Projects Section */}
      <section id="selected-projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {translations.projects.selectedTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translations.projects.selectedSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {notableProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <img 
                      src={project.logo} 
                      alt={`${project.client} Logo`}
                      className={project.client === '' ? "h-8 w-auto mr-4" : "h-12 w-auto mr-4"}
                    />
                    <h3 className="text-xl font-semibold text-gray-900">{project.client}</h3>
                  </div>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <img 
                    src="/lovable-uploads/c6b14747-14d7-4686-a316-ef8d511ec23e.png" 
                    alt="KYC Logo"
                    className="h-8 w-auto mr-2"
                  />
                  <h3 className="text-xl font-semibold text-gray-900"> - Österreichische Bank</h3>
                </div>
                <p className="text-gray-600">
                  {translations.about.projects.austrianBank}
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <img 
                    src="/lovable-uploads/39135c34-ba64-4f3c-a1e7-5f5cab6745d9.png" 
                    alt="Roxpay Logo"
                    className="h-12 w-auto mr-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">Roxpay AG</h3>
                </div>
                <p className="text-gray-600">
                  {translations.about.projects.roxpay}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {translations.projects.clients}
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex justify-center items-center">
                <img 
                  src={logo.src} 
                  alt={`Client ${index + 1}`}
                  className={`${logo.className} w-auto opacity-70 hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {translations.about.expertiseTitle}
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  {translations.about.description1}
                </p>
                <p className="text-lg">
                  {translations.about.description2}
                </p>
                <p className="text-lg">
                  {translations.about.description3}
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {value.icon}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                        <p className="text-gray-600 text-sm">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {translations.about.experience}
              </h3>
              <p className="text-gray-600">{translations.about.experienceDesc}</p>
            </div>
            
            <div className="text-center">
              <Award className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {translations.about.expertise}
              </h3>
              <p className="text-gray-600">{translations.about.expertiseDesc}</p>
            </div>
            
            <div className="text-center">
              <Globe className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {translations.about.innovation}
              </h3>
              <p className="text-gray-600">{translations.about.innovationDesc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
