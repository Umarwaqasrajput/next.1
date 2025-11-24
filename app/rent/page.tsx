"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Square, Phone, MessageCircle, Home } from "lucide-react";

const rentProperties = [
  {
    id: 4,
    title: "Beautiful House in Samanabad",
    price: 45000,
    address: "Samanabad, Faisalabad",
    bedrooms: 3,
    bathrooms: 2,
    size: "7 Marla",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400"
  },
  {
    id: 6,
    title: "Apartment in Gulberg",
    price: 35000,
    address: "Gulberg Colony, Faisalabad",
    bedrooms: 2,
    bathrooms: 2,
    size: "5 Marla",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400"
  },
  {
    id: 10,
    title: "Flat in Allama Iqbal Colony",
    price: 25000,
    address: "Allama Iqbal Colony, Faisalabad",
    bedrooms: 2,
    bathrooms: 1,
    size: "4 Marla",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400"
  },
  {
    id: 13,
    title: "Apartment in Canal Road",
    price: 55000,
    address: "Canal Road, Faisalabad",
    bedrooms: 3,
    bathrooms: 3,
    size: "8 Marla",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  }
];

export default function RentPage() {
  return (
    <div className="min-h-screen bg-purple-50">
      {/* Header */}
      <header className="bg-purple-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
              <Home size={24} />
              Rajput Real Estate
            </Link>
            <nav className="hidden md:flex space-x-3">
              <Link href="/" className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all shadow-lg">Home</Link>
              <Link href="/buy" className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-400 transition-all shadow-lg">Buy</Link>
              <Link href="/commercial" className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-400 transition-all shadow-lg">Commercial</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Properties for Rent in Faisalabad</h1>
          <p className="text-xl mb-8">Find your perfect rental home today</p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="relative h-48">
                  <Image src={property.image} alt={property.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">For Rent</span>
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
                      <Bed size={16} className="mr-1" />
                      <span>{property.bedrooms} Beds</span>
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
                    <div className="text-2xl font-bold text-purple-600">
                      PKR {property.price.toLocaleString()}<span className="text-sm text-gray-600">/month</span>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => window.open(`https://wa.me/923066120708?text=I want to rent ${property.title} - PKR ${property.price.toLocaleString()}/month`, '_blank')}
                        className="bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-all shadow-lg flex items-center gap-1"
                      >
                        <MessageCircle size={16} />
                        WhatsApp
                      </button>
                      <button 
                        onClick={() => window.location.href = `tel:+923066120708`}
                        className="bg-purple-500 text-white px-3 py-2 rounded-lg hover:bg-purple-600 transition-all shadow-lg flex items-center gap-1"
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