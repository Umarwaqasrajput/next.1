"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Square, Phone, MessageCircle, Home } from "lucide-react";

const saleProperties = [
  {
    id: 1,
    title: "Luxury Villa in Peoples Colony",
    price: 15000000,
    address: "Peoples Colony No. 1, Faisalabad",
    bedrooms: 5,
    bathrooms: 4,
    size: "1 Kanal",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400"
  },
  {
    id: 2,
    title: "Modern House in Millat Town",
    price: 8500000,
    address: "Millat Town, Faisalabad",
    bedrooms: 4,
    bathrooms: 3,
    size: "10 Marla",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=400"
  },
  {
    id: 5,
    title: "Luxury Villa in D-Ground",
    price: 22000000,
    address: "D-Ground, Faisalabad",
    bedrooms: 6,
    bathrooms: 5,
    size: "1.5 Kanal",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400"
  },
  {
    id: 7,
    title: "House in Madina Town",
    price: 9500000,
    address: "Madina Town, Faisalabad",
    bedrooms: 4,
    bathrooms: 3,
    size: "8 Marla",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400"
  }
];

export default function BuyPage() {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <header className="bg-green-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
              <Home size={24} />
              Rajput Real Estate
            </Link>
            <nav className="hidden md:flex space-x-3">
              <Link href="/" className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all shadow-lg">Home</Link>
              <Link href="/rent" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400 transition-all shadow-lg">Rent</Link>
              <Link href="/commercial" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400 transition-all shadow-lg">Commercial</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Properties for Sale in Faisalabad</h1>
          <p className="text-xl mb-8">Find your dream home with the best deals</p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saleProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="relative h-48">
                  <Image src={property.image} alt={property.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">For Sale</span>
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
                    <div className="text-2xl font-bold text-green-600">
                      PKR {property.price.toLocaleString()}
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => window.open(`https://wa.me/923066120708?text=I want to buy ${property.title} - PKR ${property.price.toLocaleString()}`, '_blank')}
                        className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-all shadow-lg flex items-center gap-1"
                      >
                        <MessageCircle size={16} />
                        WhatsApp
                      </button>
                      <button 
                        onClick={() => window.location.href = `tel:+923066120708`}
                        className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-all shadow-lg flex items-center gap-1"
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