"use client";
import Image from "next/image";
import { MapPin, Bed, Bath, Square, Phone, MessageCircle } from "lucide-react";

const residentialProperties = [
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
    id: 5,
    title: "Luxury Villa in D-Ground",
    price: 22000000,
    address: "D-Ground, Faisalabad",
    bedrooms: 6,
    bathrooms: 5,
    size: "1.5 Kanal",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400"
  }
];

export default function ResidentialPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Residential Properties</h1>
          <p className="text-xl">Find your dream home in Faisalabad</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {residentialProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={property.image}
                alt={property.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
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
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-purple-600">
                    PKR {property.price.toLocaleString()}
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => window.open(`https://wa.me/923066120708?text=I'm interested in ${property.title}`, '_blank')}
                      className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 flex items-center gap-1"
                    >
                      <MessageCircle size={16} />
                      WhatsApp
                    </button>
                    <button 
                      onClick={() => window.location.href = `tel:+923066120708`}
                      className="bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 flex items-center gap-1"
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
    </div>
  );
}