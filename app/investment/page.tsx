'use client';

import { TrendingUp, DollarSign, Building, MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function InvestmentPage() {
  const [selectedInvestment, setSelectedInvestment] = useState<string | null>(null);

  const investments = [
    {
      id: '1',
      title: 'Commercial Plaza - Kohinoor City',
      type: 'Commercial',
      location: 'Kohinoor City, Faisalabad',
      price: '₨ 2.5 Crore',
      roi: '12-15%',
      area: '5000 sq ft',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
      description: 'Prime commercial plaza with high rental yield potential',
      features: ['Ground + 2 Floors', 'Corner Plot', 'Main Road Access', 'Parking Available']
    },
    {
      id: '2', 
      title: 'Residential Plots - Eden Gardens',
      type: 'Residential',
      location: 'Eden Gardens, Faisalabad',
      price: '₨ 45 Lac',
      roi: '18-22%',
      area: '10 Marla',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400',
      description: 'Developed residential plots in premium society',
      features: ['Developed Society', 'Utilities Available', 'Security', 'Park Facing']
    },
    {
      id: '3',
      title: 'Shopping Complex - Millat Town',
      type: 'Commercial',
      location: 'Millat Town, Faisalabad',
      price: '₨ 1.8 Crore',
      roi: '14-16%',
      area: '3500 sq ft',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400',
      description: 'Modern shopping complex in busy commercial area',
      features: ['Ground Floor Shops', 'High Footfall', 'Parking', 'Generator Backup']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Investment Opportunities
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Secure your future with high-yield property investments in Faisalabad's prime locations
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-2" />
              <p className="text-lg font-semibold">High Returns</p>
            </div>
            <div className="text-center">
              <Building className="w-12 h-12 mx-auto mb-2" />
              <p className="text-lg font-semibold">Prime Properties</p>
            </div>
            <div className="text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-2" />
              <p className="text-lg font-semibold">Secure Investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Investment Properties</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investments.map((investment) => (
              <div 
                key={investment.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedInvestment(investment.id)}
              >
                <img 
                  src={investment.image} 
                  alt={investment.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      investment.type === 'Commercial' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {investment.type}
                    </span>
                    <span className="text-2xl font-bold text-green-600">{investment.roi}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{investment.title}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{investment.location}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{investment.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">{investment.price}</span>
                    <span className="text-gray-500">{investment.area}</span>
                  </div>
                  
                  <div className="space-y-1 mb-4">
                    {investment.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Invest in Faisalabad Real Estate?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Growing Market</h3>
              <p className="text-gray-600">Faisalabad's real estate market shows consistent growth with increasing demand</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industrial Hub</h3>
              <p className="text-gray-600">Major industrial city with strong economic fundamentals and job opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">High ROI</h3>
              <p className="text-gray-600">Attractive returns on investment with rental yields up to 22%</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategic Location</h3>
              <p className="text-gray-600">Central location in Punjab with excellent connectivity to major cities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Investment Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Consultation</h3>
                <p className="text-gray-600">Free consultation to understand your investment goals</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Property Selection</h3>
                <p className="text-gray-600">Choose from our curated investment properties</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Due Diligence</h3>
                <p className="text-gray-600">Complete legal verification and documentation</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Investment</h3>
                <p className="text-gray-600">Secure your investment and start earning returns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Investing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our investment specialists for personalized advice and exclusive opportunities
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-2" />
              <a href="tel:03066120708" className="text-lg hover:underline">
                0306 6120708
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-2" />
              <a href="mailto:amiraloneboy92@gmail.com" className="text-lg hover:underline">
                amiraloneboy92@gmail.com
              </a>
            </div>
          </div>
          
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
}