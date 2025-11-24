'use client';

import { useState } from 'react';
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';

const plotsData = [
  {
    id: 1,
    title: "5 Marla Plot - Eden Gardens",
    location: "Eden Gardens, Faisalabad",
    price: "25 Lakh",
    size: "5 Marla",
    type: "Residential Plot",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "10 Marla Corner Plot - Model Town",
    location: "Model Town, Faisalabad",
    price: "45 Lakh",
    size: "10 Marla",
    type: "Corner Plot",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "1 Kanal Plot - DHA",
    location: "DHA Phase 1, Faisalabad",
    price: "1.2 Crore",
    size: "1 Kanal",
    type: "Premium Plot",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "7 Marla Plot - Gulberg",
    location: "Gulberg Colony, Faisalabad",
    price: "35 Lakh",
    size: "7 Marla",
    type: "Residential Plot",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "2 Kanal Commercial Plot",
    location: "Main Road, Faisalabad",
    price: "2.5 Crore",
    size: "2 Kanal",
    type: "Commercial Plot",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    title: "12 Marla Corner Plot - Millat Town",
    location: "Millat Town, Faisalabad",
    price: "55 Lakh",
    size: "12 Marla",
    type: "Corner Plot",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
  }
];

export default function PlotsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Plots for Sale in Faisalabad
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect plot for your dream home or investment in prime locations across Faisalabad
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Plots
          </button>
          <button
            onClick={() => setSelectedFilter('residential')}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedFilter === 'residential'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Residential
          </button>
          <button
            onClick={() => setSelectedFilter('commercial')}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedFilter === 'commercial'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Commercial
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plotsData.map((plot) => (
            <div key={plot.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={plot.image} 
                  alt={plot.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{plot.title}</h3>
                  <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
                    {plot.type}
                  </span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{plot.location}</span>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">₨ {plot.price}</span>
                  <span className="text-gray-600">{plot.size}</span>
                </div>
                
                <div className="flex gap-2">
                  <a
                    href="tel:03066120708"
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                  <a
                    href="https://wa.me/923066120708"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Looking for a Specific Plot?
          </h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Contact us and we'll help you find the perfect plot.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:03066120708"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/923066120708"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}