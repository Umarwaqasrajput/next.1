"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Bath, Square, Phone, MessageCircle, Home, Building } from "lucide-react";

const commercialProperties = [
  {
    id: 3,
    title: "Commercial Plot in Kohinoor City",
    price: 12000000,
    address: "Kohinoor City, Faisalabad",
    bathrooms: 2,
    size: "5 Marla",
    type: "Plot",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400"
  },
  {
    id: 8,
    title: "Commercial Building in City Center",
    price: 35000000,
    address: "Ghanta Ghar, Faisalabad",
    bathrooms: 6,
    size: "2000 sq ft",
    type: "Building",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400"
  },
  {
    id: 15,
    title: "Commercial Shop in Katchery Road",
    price: 8500000,
    address: "Katchery Road, Faisalabad",
    bathrooms: 1,
    size: "300 sq ft",
    type: "Shop",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400"
  }
];

export default function CommercialPage() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <header className="bg-orange-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
              <Building size={24} />
              Rajput Real Estate
            </Link>
            <nav className="hidden md:flex space-x-3">
              <Link href="/" className="bg-white text-orange-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all shadow-lg">Home</Link>
              <Link href="/buy" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-400 transition-all shadow-lg">Buy</Link>
              <Link href="/rent" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-400 transition-all shadow-lg">Rent</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Commercial Properties in Faisalabad</h1>
          <p className="text-xl mb-8">Invest in prime commercial real estate</p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="relative h-48">
                  <Image src={property.image} alt={property.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Commercial</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-orange-600 px-3 py-1 rounded-full text-sm font-bold">{property.type}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{property.address}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Building size={16} className="mr-1" />
                      <span>{property.type}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath size={16} className="mr-1" />
                      <span>{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square size={16} className="mr-1" />
                      <span>{property.size}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-orange-600">
                      PKR {property.price.toLocaleString()}
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => window.open(`https://wa.me/923066120708?text=I'm interested in commercial property ${property.title} - PKR ${property.price.toLocaleString()}`, '_blank')}
                        className="bg-orange-600 text-white px-3 py-2 rounded-lg hover:bg-orange-700 transition-all shadow-lg flex items-center gap-1"
                      >
                        <MessageCircle size={16} />
                        WhatsApp
                      </button>
                      <button 
                        onClick={() => window.location.href = `tel:+923066120708`}
                        className="bg-orange-500 text-white px-3 py-2 rounded-lg hover:bg-orange-600 transition-all shadow-lg flex items-center gap-1"
                      >
                        <Phone size={16} />
                        Call
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}