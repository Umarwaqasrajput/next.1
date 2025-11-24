"use client";
import Image from "next/image";
import { Search, MapPin, Bed, Bath, Square, Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import EmailModal from "../components/ui/EmailModal";

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Peoples Colony",
    price: 15000000,
    city: "Faisalabad",
    address: "Peoples Colony No. 1, Faisalabad",
    bedrooms: 5,
    bathrooms: 4,
    size: "1 Kanal",
    purpose: "SALE",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400"
  },
  {
    id: 2,
    title: "Modern House in Millat Town",
    price: 8500000,
    city: "Faisalabad",
    address: "Millat Town, Faisalabad",
    bedrooms: 4,
    bathrooms: 3,
    size: "10 Marla",
    purpose: "SALE",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=400"
  },
  {
    id: 3,
    title: "Commercial Plot in Kohinoor City",
    price: 12000000,
    city: "Faisalabad",
    address: "Kohinoor City, Faisalabad",
    bedrooms: null,
    bathrooms: 2,
    size: "5 Marla",
    purpose: "SALE",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400"
  },
  {
    id: 4,
    title: "Beautiful House in Samanabad",
    price: 45000,
    city: "Faisalabad",
    address: "Samanabad, Faisalabad",
    bedrooms: 3,
    bathrooms: 2,
    size: "7 Marla",
    purpose: "RENT",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400"
  },
  {
    id: 5,
    title: "Luxury Villa in D-Ground",
    price: 22000000,
    city: "Faisalabad",
    address: "D-Ground, Faisalabad",
    bedrooms: 6,
    bathrooms: 5,
    size: "1.5 Kanal",
    purpose: "SALE",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400"
  },
  {
    id: 6,
    title: "Apartment in Gulberg",
    price: 35000,
    city: "Faisalabad",
    address: "Gulberg Colony, Faisalabad",
    bedrooms: 2,
    bathrooms: 2,
    size: "5 Marla",
    purpose: "RENT",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400"
  },
  {
    id: 7,
    title: "House in Madina Town",
    price: 9500000,
    city: "Faisalabad",
    address: "Madina Town, Faisalabad",
    bedrooms: 4,
    bathrooms: 3,
    size: "8 Marla",
    purpose: "SALE",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400"
  },
  {
    id: 8,
    title: "Commercial Building in City Center",
    price: 35000000,
    city: "Faisalabad",
    address: "Ghanta Ghar, Faisalabad",
    bedrooms: null,
    bathrooms: 6,
    size: "2000 sq ft",
    purpose: "SALE",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400"
  },
  {
    id: 9,
    title: "House in Susan Road",
    price: 7200000,
    city: "Faisalabad",
    address: "Susan Road, Faisalabad",
    bedrooms: 3,
    bathrooms: 2,
    size: "6 Marla",
    purpose: "SALE",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400"
  },
  {
    id: 10,
    title: "Flat in Allama Iqbal Colony",
    price: 25000,
    city: "Faisalabad",
    address: "Allama Iqbal Colony, Faisalabad",
    bedrooms: 2,
    bathrooms: 1,
    size: "4 Marla",
    purpose: "RENT",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400"
  },
  {
    id: 11,
    title: "Villa in Wapda Town",
    price: 18000000,
    city: "Faisalabad",
    address: "Wapda Town, Faisalabad",
    bedrooms: 5,
    bathrooms: 4,
    size: "12 Marla",
    purpose: "SALE",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400"
  },
  {
    id: 12,
    title: "House in Jinnah Colony",
    price: 6800000,
    city: "Faisalabad",
    address: "Jinnah Colony, Faisalabad",
    bedrooms: 3,
    bathrooms: 2,
    size: "5 Marla",
    purpose: "SALE",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400"
  },
  {
    id: 13,
    title: "Apartment in Canal Road",
    price: 55000,
    city: "Faisalabad",
    address: "Canal Road, Faisalabad",
    bedrooms: 3,
    bathrooms: 3,
    size: "8 Marla",
    purpose: "RENT",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    id: 14,
    title: "House in Razaabad",
    price: 11500000,
    city: "Faisalabad",
    address: "Razaabad, Faisalabad",
    bedrooms: 4,
    bathrooms: 3,
    size: "10 Marla",
    purpose: "SALE",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
  },
  {
    id: 15,
    title: "Commercial Shop in Katchery Road",
    price: 8500000,
    city: "Faisalabad",
    address: "Katchery Road, Faisalabad",
    bedrooms: null,
    bathrooms: 1,
    size: "300 sq ft",
    purpose: "SALE",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400"
  }
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("ALL");
  const [showEmailModal, setShowEmailModal] = useState(false);
  
  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "ALL" || property.purpose === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-4">
            <nav className="flex flex-wrap justify-center gap-2 w-full">
              <a href="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all shadow-md font-medium">Home</a>
              <a href="/residential" className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-all shadow-md font-medium">Residential</a>
              <a href="/commercial" className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-all shadow-md font-medium">Commercial</a>
              <a href="/buy" className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-all shadow-md font-medium">Buy</a>
              <a href="/rent" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all shadow-md font-medium">Rent</a>
              <a href="/plots" className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-all shadow-md font-medium">Plots</a>
              <a href="/investment" className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition-all shadow-md font-medium">Investment</a>
              <a href="tel:+923066120708" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all shadow-lg flex items-center gap-2 font-medium">
                <Phone size={16} />
                Call
              </a>
              <a href="https://wa.me/923066120708" target="_blank" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all shadow-lg flex items-center gap-2 font-medium">
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <button 
                onClick={() => setShowEmailModal(true)}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all shadow-lg flex items-center gap-2 font-medium"
              >
                <Mail size={16} />
                Email
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* CEO Picture */}
          <div className="mb-8">
            <img 
              src="/ceo.jpg" 
              alt="CEO" 
              className="w-50 h-50 rounded-full mx-auto mb-6 border-6 border-white shadow-2xl object-cover"
            />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Dream Property
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the best properties in Faisalabad, Pakistan
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-lg p-4 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search by area or property type in Faisalabad"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select 
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="ALL">All Properties</option>
                <option value="SALE">For Sale</option>
                <option value="RENT">For Rent</option>
              </select>
              <button 
                onClick={() => {
                  const element = document.getElementById('properties');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2"
              >
                <Search size={20} />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {searchTerm ? `Search Results for "${searchTerm}"` : 'Featured Properties'}
          </h3>
          <p className="text-center text-gray-600 mb-8">
            {filteredProperties.length} properties found in Faisalabad
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      property.purpose === 'SALE' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      For {property.purpose === 'SALE' ? 'Sale' : 'Rent'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {property.title}
                  </h4>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{property.address}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    {property.bedrooms && (
                      <div className="flex items-center">
                        <Bed size={16} className="mr-1" />
                        <span>{property.bedrooms} Beds</span>
                      </div>
                    )}
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
                    <div className="text-2xl font-bold text-blue-600">
                      PKR {property.price.toLocaleString()}
                      {property.purpose === 'RENT' && <span className="text-sm text-gray-600">/month</span>}
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => window.open(`https://wa.me/923066120708?text=I'm interested in ${property.title} - PKR ${property.price.toLocaleString()}`, '_blank')}
                        className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-all shadow-lg flex items-center gap-1 transform hover:scale-105"
                      >
                        <MessageCircle size={16} />
                        WhatsApp
                      </button>
                      <button 
                        onClick={() => window.location.href = `tel:+923066120708`}
                        className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-all shadow-lg flex items-center gap-1 transform hover:scale-105"
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

      {/* Contact Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-8">Contact Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone size={48} className="mb-4" />
              <h4 className="text-xl font-semibold mb-2">Call Us</h4>
              <a href="tel:+923066120708" className="text-lg hover:underline">0306 6120708</a>
            </div>
            <div className="flex flex-col items-center">
              <MessageCircle size={48} className="mb-4" />
              <h4 className="text-xl font-semibold mb-2">WhatsApp</h4>
              <a 
                href="https://wa.me/923066120708" 
                target="_blank" 
                className="text-lg hover:underline"
              >
                Chat with us
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail size={48} className="mb-4" />
              <h4 className="text-xl font-semibold mb-2">Email</h4>
              <a href="mailto:info@rajputrealestate.com" className="text-lg hover:underline">info@rajputrealestate.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-xl font-bold mb-4">Rajput Real Estate</h5>
              <p className="text-gray-400">
                Your trusted partner in finding the perfect property in Faisalabad, Pakistan.
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Services</h6>
              <ul className="space-y-2 text-gray-400">
                <li>Buy Property in Faisalabad</li>
                <li>Rent Property in Faisalabad</li>
                <li>Sell Property in Faisalabad</li>
                <li>Property Investment</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Contact Info</h6>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: 0306 6120708</li>
                <li>Email: info@rajputrealestate.com</li>
                <li>Address: Faisalabad, Pakistan</li>
                <li>WhatsApp: 0306 6120708</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Rajput Real Estate Faisalabad. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <EmailModal 
        isOpen={showEmailModal} 
        onClose={() => setShowEmailModal(false)} 
      />
    </div>
  );
}
